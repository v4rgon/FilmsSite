using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace FilmsSite.BLL.Interfaces
{
    public interface IFilesService
    {
        Task<string> UploadFile(IFormFile file);
        FileStream GetFile(string name);
    }
}
