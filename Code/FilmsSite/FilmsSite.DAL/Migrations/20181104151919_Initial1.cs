using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmsSite.DAL.Migrations
{
    public partial class Initial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserFilm_Films_FilmId",
                table: "UserFilm");

            migrationBuilder.DropForeignKey(
                name: "FK_UserFilm_AspNetUsers_UserId",
                table: "UserFilm");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserFilm",
                table: "UserFilm");

            migrationBuilder.RenameTable(
                name: "UserFilm",
                newName: "UserFilms");

            migrationBuilder.RenameIndex(
                name: "IX_UserFilm_FilmId",
                table: "UserFilms",
                newName: "IX_UserFilms_FilmId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserFilms",
                table: "UserFilms",
                columns: new[] { "UserId", "FilmId" });

            migrationBuilder.AddForeignKey(
                name: "FK_UserFilms_Films_FilmId",
                table: "UserFilms",
                column: "FilmId",
                principalTable: "Films",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserFilms_AspNetUsers_UserId",
                table: "UserFilms",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserFilms_Films_FilmId",
                table: "UserFilms");

            migrationBuilder.DropForeignKey(
                name: "FK_UserFilms_AspNetUsers_UserId",
                table: "UserFilms");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserFilms",
                table: "UserFilms");

            migrationBuilder.RenameTable(
                name: "UserFilms",
                newName: "UserFilm");

            migrationBuilder.RenameIndex(
                name: "IX_UserFilms_FilmId",
                table: "UserFilm",
                newName: "IX_UserFilm_FilmId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserFilm",
                table: "UserFilm",
                columns: new[] { "UserId", "FilmId" });

            migrationBuilder.AddForeignKey(
                name: "FK_UserFilm_Films_FilmId",
                table: "UserFilm",
                column: "FilmId",
                principalTable: "Films",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserFilm_AspNetUsers_UserId",
                table: "UserFilm",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
