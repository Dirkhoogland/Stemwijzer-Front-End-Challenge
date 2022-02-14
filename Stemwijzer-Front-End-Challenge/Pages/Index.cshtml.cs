using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.JSInterop;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;


namespace Stemwijzer_Front_End_Challenge.Pages
{



    public class IndexModel : PageModel
    {


        public void OnGet()
        {
            

        }
        public void OnPost()
        {
            var ant = Request.Form["questionnumber"]; 
        }

        public void Bindend_referendum(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 0);
        }

        public void Maatschappelijke_dienstplicht(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 1);

        }

        public void Anoniem_solliciteren(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 2);

        }

        public void Groepsbelediging(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 3);

        }


        public  int Startvragen(int Nummer, string ant)
        {
            Nummer++;       
            if (Nummer == 1 )
            {
                Bindend_referendum(Antwoorden);
            }
            if (Nummer == 2)
            {
                Maatschappelijke_dienstplicht(Antwoorden);
            }
            if (Nummer == 3)
            {
                Anoniem_solliciteren(Antwoorden);
            }
            if (Nummer == 4)
            {
                Groepsbelediging(Antwoorden);
            }

            else
            {
                
            }

            return (Nummer);

        }

        
        string[] Antwoorden = new string[] { "-", "-", "-", "-" };
        int Nummer = 0;
        
        public void Check()
        {
          string ant1 = (string)Antwoorden.GetValue(0);
            if (ant1 == "-") { Bindend_referendum(Antwoorden); }

            string ant2 = (string)Antwoorden.GetValue(1);
            if (ant2 == "-") { Maatschappelijke_dienstplicht(Antwoorden); }

            string ant3 = (string)Antwoorden.GetValue(2);
            if (ant3 == "-") { Anoniem_solliciteren(Antwoorden); }

            string ant4 = (string)Antwoorden.GetValue(3);
            if (ant4 == "-") { Groepsbelediging(Antwoorden); }

            else
            {

            }
        }

        
    }
}
