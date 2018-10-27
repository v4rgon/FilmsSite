using FilmsSite.BLL.Interfaces;
using FilmsSite.DAL.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using FilmsSite.BLL.Exceptions;
using FilmsSite.BLL.Models;
using Microsoft.AspNetCore.Identity;

namespace FilmsSite.BLL.Services
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<UserEntity> _userManager;

        public TokenService(IConfiguration configuration, UserManager<UserEntity> userManager)
        {
            _configuration = configuration;
            _userManager = userManager;
        }

        public async Task<TokenDTO> GenerateJwtToken(string username, string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            if (user == null) throw new UserNotExistsException("User not found!") { Username = username };

            var roles = await _userManager.GetRolesAsync(user);

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Name, username),
                new Claim(ClaimTypes.NameIdentifier, id),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, roles.First())
            };

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddHours(3),
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])),
                    SecurityAlgorithms.HmacSha256)
            );

            return new TokenDTO()
            {
                AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                Expires = token.ValidTo,
                Role = roles.First()
            };
        }

        public string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }
    }
}
