using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stemwijzer_Front_End_Challenge.Pages
{
   


    public class IndexModel : PageModel
    {


        public void OnGet()
        {
            
        }
        // Testen op correcte match, voer in:
        // PVV: contra, pro, contra, pro
        // SP: pro, contra, contra, contra
        // D66: pro, contra, pro, contra
        // CU: pro, pro, pro, contra

        

        public void Bindend_referendum()
        {
            

        }

        public void Maatschappelijke_dienstplicht()
        {


        }

        public void Anoniem_solliciteren()
        {


        }

        public void Groepsbelediging()
        {


        }


        public  int Startvragen(int nummer)
        {
            nummer++;
            
            if (nummer == 1 )
            {
                Bindend_referendum();
            }
            if (nummer == 2)
            {
                Maatschappelijke_dienstplicht();
            }
            if (nummer == 3)
            {
                Anoniem_solliciteren();
            }
            if (nummer == 4)
            {
                Groepsbelediging();
            }

            return (nummer);

        }


        string[] Antwoorden = new string[] { "-", "-", "-", "-" };
        int nummer = 0;
        public void Start()
        {
            Startvragen(nummer);
        }


    }
}
