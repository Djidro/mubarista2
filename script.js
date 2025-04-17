// script.js
function openTab(section) {
  let content = '';
  if (section === 'about') {
    content = `
      <html>
      <head><title>About Mubarista</title></head>
      <body style="font-family:Arial;text-align:center;padding:20px;">
        <h2>About Mubarista</h2>
        <p>Mubarista is a platform dedicated to coffee education. We inspire and train future baristas with quality content and practical videos.</p>
        <video width="90%" controls>
          <source src="mubarista-intro.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <br><br>
        <button onclick="window.close()">Back</button>
      </body>
      </html>
    `;
  } else if (section === 'blog') {
    content = `
      <html>
      <head><title>Latest Blog</title></head>
      <body style="font-family:Arial;text-align:center;padding:20px;">
        <h2>Latest Coffee Blogs</h2>
        <ul>
          <li><strong>The Art of Espresso:</strong> Learn to make rich, bold espresso at home.</li>
          <li><strong>Cold Brew Magic:</strong> How to brew refreshing cold coffee.</li>
          <li><strong>Coffee Around the World:</strong> Different styles and cultures.</li>
          <li><strong>Perfect Your Pour:</strong> Brewing tips for beginners.</li>
          <li><strong>Latte Art for Starters:</strong> Creative designs you can try.</li>
        </ul>
        <br><button onclick="window.close()">Back</button>
      </body>
      </html>
    `;
  } else if (section === 'training') {
    content = `
      <html>
      <head><title>Barista Training</title></head>
      <body style="font-family:Arial;text-align:center;padding:20px;">
        <h2>Barista Training Course</h2>
        <p>Our course covers everything from coffee theory to hands-on espresso training. You’ll gain the skills to work in any café or launch your own coffee project.</p>
        <ul>
          <li>1. Coffee theory and history</li>
          <li>2. Espresso techniques</li>
          <li>3. Milk frothing & latte art</li>
          <li>4. Cleaning and maintenance</li>
          <li>5. Customer interaction & service</li>
        </ul>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px;">
          <img src="photo1.jpg" width="100%" alt="Photo 1">
          <img src="photo2.jpg" width="100%" alt="Photo 2">
          <img src="photo3.jpg" width="100%" alt="Photo 3">
          <img src="photo4.jpg" width="100%" alt="Photo 4">
          <img src="photo5.jpg" width="100%" alt="Photo 5">
        </div>
        <br><button onclick="window.close()">Back</button>
      </body>
      </html>
    `;
  }

  const newWindow = window.open('', '_blank');
  newWindow.document.write(content);
  newWindow.document.close();
}