using Datin.Api.Data;
namespace Datin.Api.Controllers

{
    [ApiController]
    [Route ("api/[controller]")]
    public class HomeController : ControllerBase {
        private readonly DataContext context;
        public HomeController (DataContext context) {
            this.context = context;

        }

       [HttpGet]
       [Route("/GetAll")]

        public ActionResult GetData()
        {

            return ok(context.tblValues.Tolist());
        

        }
    }
}