export const projects = [
  {
    images: ["img/heat.png"],
    title: "Heat Detector",
    description:
      "An embedded system that detects temperature using an LM35 sensor. The measured temperature is displayed on a seven-segment display, while a piezo buzzer produces sound with increasing intensity as the temperature rises. Useful for simple monitoring systems such as overheating alerts.",
    tags: ["Embedded System", "C Language", "LM35 Sensor", "Seven Segment", "Piezo Buzzer"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing", external: true },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/door1.png", "img/door2.png", "img/door3.png"],
    title: "Automatic Door",
    description:
      "An automatic door system using a DC motor, ultrasonic sensor, temperature sensor, and light sensor. The door opens and closes automatically based on distance, temperature, or ambient light level. Designed for smart building or energy-saving applications.",
    tags: ["Embedded System", "C Language", "Ultrasonic Sensor", "Temperature Sensor", "Light Sensor", "DC Motor"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing", external: true },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/arm1.png", "img/arm2.png"],
    title: "Robot Arm",
    description:
      "A robot arm system controlled using a joystick and button interface. The VRX axis controls the base rotation (60\u00b0\u2013120\u00b0), while the VRY axis controls the shoulder movement (60\u00b0\u2013150\u00b0). The claw is operated by a button, toggling between open and closed states. The system uses Arduino with analogRead() to map joystick inputs to servo angles, allowing real-time manual control for object manipulation.",
    tags: ["Embedded System", "Arduino", "C Language", "Joystick Module", "Servo Motor", "Button Control"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing", external: true },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/traffic1.png", "img/traffic2.png"],
    title: "Traffic Light",
    description:
      "A traffic light system using LEDs and seven-segment displays for both automatic and manual control. In automatic mode, four-way intersection lights operate on a timed cycle, alternating between green and red like a real traffic light. In manual mode, using a push-button: the first press turns on one LED, the second press turns on two LEDs, until all LEDs light up. Pressing again makes all LEDs blink, and the next press turns them all off.",
    tags: ["Embedded System", "C Language", "LED", "Seven Segment", "Push Button", "Traffic Light Simulation"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing", external: true },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/led1.png", "img/led2.png"],
    title: "Joystick & Web-Controlled LED",
    description:
      "A dual-function LED control system using ESP8266. The first mode uses a joystick module connected to ESP8266 to control two LEDs: moving the joystick right lights up the red LED, moving it left lights up the green LED, and pressing the button lights up both LEDs simultaneously. The second mode connects ESP8266 to WiFi, allowing LED control via a web page. The ESP8266 hosts a web server with real-time LED status updates and controls using WebSockets, enabling users to turn LEDs on and off directly from a browser interface.",
    tags: ["Embedded System", "ESP8266", "C Language", "Joystick Module", "LED Control", "WebSocket", "Web Server", "WiFi"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing", external: true },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/led1.png", "img/led2.png"],
    title: "Joystick Controlled Car",
    description:
      "A robot car project controlled wirelessly using a gamepad and NodeMCU ESP32. The ESP32 connects via WiFi or Bluetooth to receive directional commands from the gamepad. These commands are processed in real time to control the car\u2019s motors, enabling smooth forward, backward, left, and right movement. Designed for remote navigation and IoT experimentation, the system demonstrates wireless robotics control using microcontroller communication protocols.",
    tags: ["Embedded System", "ESP32", "Bluetooth", "WiFi", "Gamepad", "Robot Car", "C Language"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing", external: true },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/amr1.png"],
    title: "Autonomous Mobile Robot (AMR)",
    description:
      "A simplified autonomous mobile robot designed to follow a predefined path without human intervention. The AMR can move forward, turn left or right, and navigate through programmed routes. It uses an ultrasonic sensor to detect objects in its path, then picks them up using a gripper mechanism and transports them to a target location. This system simulates a basic industrial robotic workflow, demonstrating automation in item delivery tasks.",
    tags: ["Embedded System", "Autonomous Robot", "Ultrasonic Sensor", "C Language", "Path Following", "Object Detection", "Gripper"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/box1.png", "img/box2.png", "img/box3.png", "img/box4.png"],
    title: "IoT Box by Mattel",
    description:
      "IoT Box for Machine Monitoring as part of the Mattel progam, designed for real-time machine data collection in dynamic and mobile manufacturing environments. The IoT Box integrates multiple sensors\u2014fire sensor, DHT22 (temperature & humidity), motion sensor, and vibration sensor (SW-420)\u2014to detect critical machine conditions such as overheating, fire, excessive vibration, and operational status. Sensor data is transmitted via the MQTT protocol to a Firebase Realtime Database, visualized through a web interface, and backed up locally. This system enables predictive maintenance and flexible deployment for smart factory applications, even in areas where wired IoT infrastructure is impractical.",
    tags: ["IoT", "MQTT", "Firebase Realtime DB", "DHT22", "Fire Sensor", "SW-420", "Motion Sensor", "Web Dashboard", "Edge Computing"],
    links: [
      { label: "Live Demo", url: "https://github.com/Sarahwati-arch/IoT_Box" },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/churn1.png", "img/churn2.png", "img/churn3.png", "img/churn4.png", "img/churn5.png", "img/churn6.png"],
    title: "Customer Churn Prediction by Lapis AI",
    description:
      "A machine learning web app built as part of the Lapis AI program. It predicts customer churn using the Telco Customer Churn Dataset (7,043 entries, 21 features). The model analyzes customer behavior like tenure, contract, and payment method. Logistic Regression was chosen for its accuracy and simplicity. The app includes a user-friendly interface with input forms and behavior visualizations.",
    tags: ["Machine Learning", "Final model: Logistic Regression", "Churn Analysis", "Python", "Kaggle"],
    links: [
      { label: "Live Demo", url: "https://github.com/Sarahwati-arch/Customer-Churn" },
      { label: "Details", url: "https://drive.google.com/drive/folders/14qEbr5jq2i_M_baSOPeymXCDrJ964ren?usp=sharing" },
    ],
  },
  {
    images: ["img/math1.png", "img/math2.png", "img/math3.png", "img/math4.png", "img/math5.png"],
    title: "MathUp Climber",
    description:
      "This application helps users practice and test their math skills. If they answer correctly, they move to the next question or next level, if they answer wrong, the game ends. At the end, the app shows the user\u2019s final score and the highest level they reached.",
    tags: ["React JS", "Flask", "Python", "Docker"],
    links: [
      { label: "Live Demo", url: "https://github.com/Sarahwati-arch/MathUp" },
      { label: "Details", url: "https://github.com/Sarahwati-arch/MathUp" },
    ],
  },
  {
    images: ["img/pawcine1.png", "img/pawcine2.png"],
    title: "Pawcine",
    description:
      "Cat care app with search, online shop, emergency call, vet clinic locator, counseling, adoption center, cat videos, homepage navigation, and user login features.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    links: [
      { label: "Live Demo", url: "files/Pawcine_Report.pdf", external: true },
      { label: "Details", url: "#" },
    ],
  },
  {
    images: ["img/cupkiss1.png", "img/cupkiss2.png", "img/cupkiss3.png", "img/cupkiss4.png", "img/cupkiss5.png"],
    title: "Cupkiss",
    description:
      "Cupkiss cupcake ordering website with login/signup, homepage, cupcake info, shopping cart, secure payment, and contact details.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Node.js", "MySQL"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/u/1/mobile/folders/1dlKFHsIzLQHSgqKf6UuESgxPGWb18jMa" },
      { label: "Details", url: "files/Cupkiss_Report.pdf" },
    ],
  },
  {
    images: [
      "img/visar1.png", "img/visar2.png", "img/visar3.png", "img/visar4.png",
      "img/visar5.png", "img/visar6.png", "img/visar7.png", "img/visar8.png",
      "img/visar9.png", "img/visar10.png", "img/visar11.png",
    ],
    title: "Visar",
    description:
      "Visar is a MySQL-based DVD game rental system where admins manage products, bookings, and customer data securely, with support for multi-booker transactions and product sharing among users.",
    tags: ["HTML", "CSS", "JavaScript", "Laravel", "Node.js", "MySQL"],
    links: [
      { label: "Live Demo", url: "files/Visar_Report.pdf" },
      { label: "Details", url: "files/Visar_Report.pdf" },
    ],
  },
  {
    images: ["img/stacato1.png", "img/stacato2.png", "img/stacato3.png", "img/stacato4.png", "img/stacato5.png"],
    title: "Stacato Studio",
    description:
      "This application is designed for renting band studios. It provides a platform where admin can search for, book, and manage studio rentals based on users specific needs. Some of its features include helping admin keep track, create, update, and delete projects in a simple manner.",
    tags: ["Java", "MySql"],
    links: [
      { label: "Live Demo", url: "files/Stacato_Report.pdf" },
      { label: "Details", url: "files/Stacato_Report.pdf" },
    ],
  },
  {
    images: ["img/cga1.png", "img/cga2.png", "img/cga3.png", "img/cga4.png", "img/cga5.png"],
    title: "SpaceBob",
    description:
      "Spacebob is a 3D animation project featuring custom-modeled characters, props, and space-themed storytelling, built using Blender with detailed texturing, rigging, and environment assembly for a creative animated scene.",
    tags: ["Blender 3D", "HDRI Lighting", "Procedural Texturing", "Character Rigging", "Animation"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/1jMJnBBPIhV0567Ws35hq2V3nz-UsAF4j?usp=sharing" },
      { label: "Details", url: "https://drive.google.com/drive/folders/1jMJnBBPIhV0567Ws35hq2V3nz-UsAF4j?usp=sharing" },
    ],
  },
  {
    images: ["img/medibot1.png", "img/medibot2.png", "img/medibot3.png", "img/medibot4.png"],
    title: "Medibot",
    description:
      "Medibot is an AI-powered medication reminder chatbot that helps users stay on schedule with their prescriptions through natural language input, smart scheduling, and real-time notifications.",
    tags: ["Python", "HTML", "CSS", "JavaScript", "Flask", "spaCy, Schedule, Time", "SQLite", "Fetch API"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/17GQijj3tawuK6rN1TLQ6vgFtTWKIwa6Z?usp=sharing" },
      { label: "Details", url: "https://drive.google.com/drive/folders/17GQijj3tawuK6rN1TLQ6vgFtTWKIwa6Z?usp=sharing" },
    ],
  },
  {
    images: ["img/syncat1.png", "img/syncat2.png", "img/syncat3.png", "img/syncat4.png", "img/syncat5.png"],
    title: "SynCat",
    description:
      "synCat is an app made for two people, like couples or best friends to stay connected. It lets users share live location, update statuses, and send a \u201cmiss you\u201d alert. Both users log in with the same password, making it private and easy to use.",
    tags: ["PHP", "HTML", "CSS", "React.js", "MySQL", "Firebase", "GPS API"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/1EBaPu5x5GpAOOGvAvc9cNN_QuB2seBEN?usp=sharing" },
      { label: "Details", url: "https://drive.google.com/drive/folders/1EBaPu5x5GpAOOGvAvc9cNN_QuB2seBEN?usp=sharing" },
    ],
  },
  {
    images: ["img/todo1.png", "img/todo2.png", "img/todo3.png", "img/todo4.png"],
    title: "To Do List",
    description:
      "A personalized To-Do List Android app built with Java, allowing users to add tasks with pictures and status, save data locally, and interact through Bluetooth and light sensor features that visually respond to ambient lighting.",
    tags: ["Java", "Android Studio", "Local Storage", "Bluetooth API", "Light Sensor API"],
    links: [
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/1mlP6zfUBrknBqEGZGTbP08tjrXdD_9L_?usp=sharing" },
      { label: "Details", url: "https://drive.google.com/drive/folders/1mlP6zfUBrknBqEGZGTbP08tjrXdD_9L_?usp=sharing" },
    ],
  },
  {
    images: ["img/quiz1.png", "img/quiz2.png"],
    title: "QuizApp",
    description:
      "An interactive Quiz App built in Android Studio using Java, where users answer multiple-choice questions and receive instant feedback with color indicators and a final score summary, with an option to retake the quiz.",
    tags: ["Java", "Android Studio", "Firebase Realtime Database"],
    links: [
      { label: "Live Demo", url: "https://github.com/naurelie/DELAVISAR" },
      { label: "Details", url: "https://github.com/naurelie/DELAVISAR" },
    ],
  },
];
