using FilmsSite.BLL.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Services
{
    public class FilesService : IFilesService
    {
        private const string Host = "http://localhost:5000";

        private readonly IHostingEnvironment _env;

        public FilesService(IHostingEnvironment env)
        {
            _env = env;
        }

        public async Task<string> UploadFile(IFormFile file)
        {
            var name = Guid.NewGuid();
            var extension = file.FileName.Split('.').Last();

            var newFileName = string.Join('.', name, extension);
            var path = Path.Combine(_env.WebRootPath, "images");
            using (var fs = new FileStream(Path.Combine(path, newFileName), FileMode.Create))
            {
                await file.CopyToAsync(fs);
            }

            var apiPath = string.Join("/", Host, "api/photos/download", newFileName);
            return apiPath;
        }

        public FileStream GetFile(string name)
        {
            var path = Path.Combine(_env.WebRootPath, "images");
            return new FileStream(Path.Combine(path, name), FileMode.Open);
        }
    }
}
