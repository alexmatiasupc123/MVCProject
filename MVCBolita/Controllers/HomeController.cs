using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace MVCProject.Controllers
{
    public class HomeController : Controller
    {
        
        
        public ActionResult Index()
        {
            
            //var x = Guid.NewGuid(); 
            ServiceBolitaReference.IService1 service = new ServiceBolitaReference.Service1Client();

            int num = 50;
            string description=service.GetData(num);

            ViewBag.Message = description.ToString();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
