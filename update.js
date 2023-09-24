
    // Your JSON data for progress bars
    import jsonData from './files/skills.json' assert {type: 'json'};
    const progressBarsDiv = document.getElementById("progress-bars");
  
    // Loop through the JSON data and update the HTML content for progress bars
    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        const value = jsonData[key];
  
        // Create a new progress bar element
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
  
        // Create the title element
        const title = document.createElement("p");
        title.classList.add("prog-title");
        title.textContent = key;
  
        // Create the progress container
        const progressContainer = document.createElement("div");
        progressContainer.classList.add("progress-con");
  
        // Create the progress text element
        const progressText = document.createElement("p");
        progressText.classList.add("prog-text");
        progressText.textContent = value + "%";
  
        // Create the progress element
        const progress = document.createElement("div");
        progress.classList.add("progress");
  
        // Create the inline style for the progress element
        const key_ = document.createElement("span");
        key_.classList.add(key);
        key_.style.width = value + "%";
  
        // Append the elements to their respective parents
        progressContainer.appendChild(progressText);
        progress.appendChild(key_);
        progressContainer.appendChild(progress);
        progressBar.appendChild(title);
        progressBar.appendChild(progressContainer);
  
        // Append the progress bar to the main div
        progressBarsDiv.appendChild(progressBar);
      }
    }
  
    // Your JSON data for work experience
    import jsonWExp from './files/WExp.json' assert {type: 'json'};
    // const jsonWExp = 
  
    const timelineDiv = document.getElementById("timeline");
  
    // Loop through the JSON data and update the HTML content for work experience
    jsonWExp.forEach(itemData => {
      // Create a new timeline item element
      const timelineItem = document.createElement("div");
      timelineItem.classList.add("timeline-item");
  
      // Create the icon element
      const icon = document.createElement("div");
      icon.classList.add("tl-icon");
      icon.innerHTML = '<i class="fas fa-briefcase"></i>';
  
      // Create the duration element
      const duration = document.createElement("p");
      duration.classList.add("tl-duration");
      duration.textContent = itemData.time;
  
      // Create the title element
      const title = document.createElement("h5");
      title.textContent = itemData.title;
  
      // Create the company element
      const companySpan = document.createElement("span");
      companySpan.textContent = " - " + itemData.company;
      title.appendChild(companySpan);
  
      // Create the description element
      const description = document.createElement("p");
      description.textContent = itemData.description;
  
      // Append the elements to their respective parents
      timelineItem.appendChild(icon);
      timelineItem.appendChild(duration);
      timelineItem.appendChild(title);
      timelineItem.appendChild(description);
  
      // Append the timeline item to the timeline
      timelineDiv.appendChild(timelineItem);
    });

    // Your JSON data for the new timeline items
    import jsonTimeline from './files/project.json' assert {type: 'json'};


  const timelinePro = document.getElementById("timelinePro");

  // Loop through the JSON data and update the HTML content for timeline items
  jsonTimeline.forEach(itemData => {
    // Create a new timeline item element
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");

    // Create the icon element
    const icon = document.createElement("div");
    icon.classList.add("tl-icon");
    icon.innerHTML = '<i class="fas fa-briefcase"></i>';

    // Create the duration element
    const duration = document.createElement("p");
    duration.classList.add("tl-duration");
    duration.textContent = itemData.Time;

    // Create the title element with a link
    const title = document.createElement("h5");
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", itemData.link);
    link.textContent = itemData.Title;
    title.appendChild(link);

    // Create the description element
    const description = document.createElement("p");
    description.textContent = itemData.description;

    // Append the elements to their respective parents
    timelineItem.appendChild(icon);
    timelineItem.appendChild(duration);
    timelineItem.appendChild(title);
    timelineItem.appendChild(description);

    // Append the timeline item to the timeline
    timelinePro.appendChild(timelineItem);
  });

  // Your JSON data for portfolio items
  import portfolioData from './files/certificates.json' assert {type: 'json'};

// Script for Looping certificates
const portfoliosDiv = document.getElementById("portfolios");

// Loop through the JSON data and update the HTML content for portfolio items
portfolioData.forEach(itemData => {
  // Create a new portfolio item element
  const portfolioItem = document.createElement("div");
  portfolioItem.classList.add("portfolio-item");

  // Create the image element
  const image = document.createElement("div");
  image.classList.add("image");
  const img = document.createElement("img") 
  img.src = itemData.Img_src;


  // img.style= "";
  image.appendChild(img);

  // Create the hover items container
  const hoverItems = document.createElement("div");
  hoverItems.classList.add("hover-items");

  // Create the title element
  const title = document.createElement("h3");
  title.classList.add("cert-title");
  title.textContent = itemData.Title;

  // Create the icons container
  const icons = document.createElement("div");
  icons.classList.add("icons");

  // Create the link element
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = itemData.link;
  link.classList.add("icon");
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-certificate");
  link.appendChild(icon);

  // Create the certificate ID element
  const certificateID = document.createElement("p");
  certificateID.classList.add("certificate-id");
  certificateID.textContent = itemData.certificatedId;

  // Append the elements to their respective parents
  icons.appendChild(link);
  hoverItems.appendChild(title);
  hoverItems.appendChild(icons);
  hoverItems.appendChild(certificateID);
  portfolioItem.appendChild(image);
  portfolioItem.appendChild(hoverItems);

  // Append the portfolio item to the portfolio container
  portfoliosDiv.appendChild(portfolioItem);
});


// Get the parent div
const blogsDiv = document.getElementById("project");

// Loop through the JSON data and update the HTML content for blogs
jsonTimeline.forEach(blogData => {
  // Create a new blog item element
  const blogItem = document.createElement("div");
  blogItem.classList.add("blog");

  // Create the link element
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = blogData.link;

  // Create the image element
  const img = document.createElement("img");
  img.src = blogData.img;
  img.alt = "";

  // Create the blog text container
  const blogText = document.createElement("div");
  blogText.classList.add("blog-text");

  // Create the blog title element
  const blogTitle = document.createElement("h4");
  blogTitle.textContent = blogData.Title;

  // Create the blog description element
  const blogDescription = document.createElement("p");
  blogDescription.textContent = blogData.description;

  // Append the elements to their respective parents
  blogText.appendChild(blogTitle);
  blogText.appendChild(blogDescription);
  link.appendChild(img);
  link.appendChild(blogText);
  blogItem.appendChild(link);

  // Append the blog item to the blogs container
  blogsDiv.appendChild(blogItem);
});

  