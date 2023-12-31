import { jsPDF } from "jspdf";

function generatePDF() {
  const pdfElement = document.querySelector(".container-sheet");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  doc.html(pdfElement, {
    callback: (pdf) => {
      pdf.save("MeuCurriCreator.pdf");
    },
  });
}

export default generatePDF;
