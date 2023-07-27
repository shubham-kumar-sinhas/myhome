// // ExportToPPT.js
// import React from 'react';
// import { saveAs } from 'file-saver';
// import PptxGenJS from 'pptxgenjs';

// const ExportToPPT = ({ jsonData }) => {
//   const handleExport = () => {
//     const pptx = new PptxGenJS();

//     // Calculate the number of slides needed to display the JSON data
//     const dataKeys = Object.keys(jsonData);
//     const slidesNeeded = Math.ceil(dataKeys.length / 10); // Display up to 10 key-value pairs per slide

//     for (let i = 0; i < slidesNeeded; i++) {
//       const slide = pptx.addSlide();

//       // Set the title of the slide
//       slide.addText(`My JSON Data (Slide ${i + 1})`, { x: 1, y: 1, fontSize: 18, color: '363636' });

//       // Calculate the range of key-value pairs to display on this slide
//       const startIdx = i * 10;
//       const endIdx = Math.min((i + 1) * 10, dataKeys.length);

//       // Extract the relevant key-value pairs for this slide
//       const dataSlice = dataKeys.slice(startIdx, endIdx).map((key) => `${key}: ${JSON.stringify(jsonData[key])}`);
//       const dataText = dataSlice.join('\n');

//       // Add the JSON data to the slide
//       slide.addText(dataText, { x: 1, y: 2, fontSize: 12, color: '363636' });
//     }

//     // Generate the PowerPoint file
//     pptx.writeFile('data.pptx');
//   };

//   return (
//     <button onClick={handleExport}>Export to PPT</button>
//   );
// };

// export default ExportToPPT;








// Printing everydatakeys into a new slide
import React from 'react';
import { saveAs } from 'file-saver';
import PptxGenJS from 'pptxgenjs';

const ExportToPPT = ({ jsonData }) => {
  const handleExport = async () => {
    const pptx = new PptxGenJS();

    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        const text = JSON.stringify(jsonData[key], null, 2);

        let slide = pptx.addSlide();
        const slideHeight = 6.5; // Assuming slide height of 6.5 inches
        const lineHeight = 2; // Adjust this value for line spacing
        let remainingHeight = slideHeight - 1.5; // Leave margin for title

        // Set the title of the slide to the data key
        slide.addText(key, { x: 1, y: 0.5, fontSize: 18, color: '363636' });

        const textChunks = chunkText(text, 1700); // Adjust the chunk size as needed

        for (const chunk of textChunks) {
          const linesRequired = Math.ceil((chunk.length * 12) / 180); // Assuming 12px font size

          if (linesRequired > remainingHeight / lineHeight) {
            slide = pptx.addSlide();
            remainingHeight = slideHeight - 1.5; // Reset remaining height for the new slide
          }

          slide.addText(chunk, {
            x: 1,
            y: slideHeight - remainingHeight,
            fontSize: 12,
            color: '363636',
            w: '85%', // Leave some margin on both sides
            h: lineHeight,
            align: 'left',
            autoFit: true,
          });

          remainingHeight -= linesRequired * lineHeight;
        }
      }
    }

    try {
      // Generate the PowerPoint file asynchronously
      const pptxData = await pptx.write('arraybuffer');

      // Convert the arraybuffer to a Blob
      const blob = new Blob([pptxData], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });

      // Save the file using FileSaver.js
      saveAs(blob, 'data.pptx');
    } catch (error) {
      console.error('Error generating PPT:', error);
    }
  };

  // Helper function to split long text into chunks
  const chunkText = (text, maxLength) => {
    const chunks = [];
    let i = 0;
    while (i < text.length) {
      chunks.push(text.substr(i, maxLength));
      i += maxLength;
    }
    return chunks;
  };

  return (
    <button onClick={handleExport}>Export to PPT</button>
  );
};

export default ExportToPPT;





