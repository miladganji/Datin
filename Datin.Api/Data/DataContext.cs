using Datin.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Datin.Api.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        :base(options)
        {
            
        }
        
        public DbSet<values> tblValues { get; set; }
    }
}