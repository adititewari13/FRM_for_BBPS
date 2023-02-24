import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// export class DashboardComponent implements OnInit {

//   constructor() { }


//   ngOnInit(): void {
//   }

// }

export class DashboardComponent {
  title = 'html-to-pdf-angular-application';
  public convertToPDF()
  {
  html2canvas(document.body).then(canvas => {
  // Few necessary setting options
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  var width = pdf.internal.pageSize.getWidth();
  var height = canvas.height * width / canvas.width;
  pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
  pdf.save('output.pdf'); // Generated PDF
  });
  }
}