import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyD725j-MCE6dwWPWlRPJRvVsnxlOHEKxPQ",
   authDomain: "chatroom-53e40.firebaseapp.com",
   databaseURL: "https://chatroom-53e40.firebaseio.com",
   projectId: "chatroom-53e40",
   storageBucket: "chatroom-53e40.appspot.com",
   messagingSenderId: "450046136799"
};
firebase.initializeApp(config);
// import fakeData from './FakeData';

// const _format = (data) => {
//    return data.map(item => {
//       return ([
//          { text: item.name },
//          { text: item.username },
//          { text: item.email },
//          { text: item.phone },
//          { text: item.website },
//       ]);
//    });
// }


export default (rows) => {
   const { vfs } = vfsFonts.pdfMake;
   pdfMake.vfs = vfs;

   // var printer = new pdfMake();
   // const data = fakeData(rows);
   // const formattedData = _format(data);

   const documentDefinition = {
      pageSize: 'A4',
      content: [
         {
            text: 'PEMERINTAH KABUPATEN KULON PROGO\nKECAMATAN LENDAH\nDESA BUMIREJO',
            style: 'header',
            alignment: 'center'
         },
         {
            text: 'Alamat : Dukuh, Bumirejo, Lendah, Kulon Progo, Kode Pos 55663 Telp. (0247) 9234226',
            alignment: 'center'
         },
         {
            canvas: [

               {
                  type: 'line',
                  x1: 0, y1: 5,
                  x2: 515, y2: 5,
                  lineWidth: 1,
               }
            ]
         },
         {
            canvas: [

               {
                  type: 'line',
                  x1: 0, y1: 3,
                  x2: 515, y2: 3,
                  lineWidth: 3,
               }
            ]
         },
         {
            style: 'tableExample',
            table: {
               widths: [150, '*', 150],
               body: [
                  [
                     {
                        border: [false, false, false, false],
                        text: ''
                     },
                     {
                        border: [false, false, false, true],
                        fillColor: '',
                        text: 'SURAT KETERANGAN KEMATIAN',
                        alignment: "center"
                     },
                     {
                        border: [false, false, false, false],
                        fillColor: '',
                        text: ''
                     }
                  ],
                  [
                     {
                        border: [false, false, false, false],
                        text: ''
                     },
                     {
                        border: [false, false, false, false],
                        fillColor: '',
                        text: 'No. 121/KBL/VIII/2017',
                        alignment: "center"
                     },
                     {
                        border: [false, false, false, false],
                        fillColor: '',
                        text: ''
                     }
                  ]
               ]
            }
         },
         {
            text: 'Saya yang bertanda tangan dibawah ini, Kepala Desa Bumirejo Kecamatan Lendah Kabupaten Kulon Progo dengan ini menerangkan bahwa :',
            alignment: 'justify'
         },
         {
            columns: [
               {
                  width: 90,
                  text: 'Nama'
               },
               {
                  width: 20,
                  text: ':'
               },
               {
                  width: '*',
                  text: 'Hari Irawan'
               }
            ]
         }

      ],
      styles: {
         header: {
            fontSize: 18,
            bold: true,
            alignment: 'justify'
         },
         keterangan: {
            fontSize: 12
         }
      }
   };

   pdfMake.createPdf(documentDefinition).open();
   // var pdfDoc = pdfMake.createPdf(documentDefinition);
   // pdfDoc.getBase64((buffer) => {

   //    var ref = firebase.storage().ref('sweet_gifs/' + 'surat1.pdf');
   //    ref.putString(buffer, 'base64').then(function (snapshot) {
   //       console.log('Uploaded a base64 string!');
   //    });
   //    console.log(buffer);
   //    // di sini Anda telah menghasilkan pdf buffer 
   //    // di sini Anda dapat melakukan apa yang Anda inginkan 
   //    // var fs = require('fs');
   //    // buffer.pipe(fs.createWriteStream('pdfs/basics.pdf'));
   //    // buffer.end()
   // });
}
