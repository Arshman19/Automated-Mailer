const cgpa = 0;

export const MLCoverLetter = (
  date,
  EName,
  companyName,
  companyAddress,
  specificPosition,
  foundWhere,
  aboutCompany
) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cover Letter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="text-align: right;">
        <h1 style="margin: 0;">Arshman Kumar</h1>
        <p style="margin: 0;">
            <a href="mailto:arshmankumar2003@gmail.com">arshmankumar2003@gmail.com</a> |
            <a href="https://github.com/Arshman19">github.Arshman19</a> |
        </p>
    </div>
    
    <p>${date}</p>

    <p>
        ${EName} <br>
        ${companyName} <br>
        ${companyAddress} <br>
    </p>

    <p>Dear ${EName},</p>

    <p>I am writing to express my enthusiasm for the <strong>${
      specificPosition || "Machine Learning Engineer"
    }</strong> position at <strong>${companyName}</strong>, as advertised on <strong>${foundWhere}]</strong>. With a strong academic background in Artificial Intelligence, extensive hands-on experience in developing and deploying machine learning models, and a passion for solving complex problems, I am confident in my ability to contribute effectively to your team.</p>

    <p>I am currently pursuing a <strong>B.Tech in XYZ</strong> at <strong>Netaji Subhas University of Technology</strong>, where I have maintained a CGPA of ${cgpa}. My coursework and projects have provided me with a solid foundation in machine learning, deep learning, and data science. </p>

    

    <p>I am particularly drawn to <strong>${companyName}</strong> because of your commitment to <strong>${aboutCompany}</strong>. I am eager to bring my expertise in machine learning, my proficiency in programming languages such as Python and JavaScript, and my collaborative mindset to your team.</p>

    <p>Some of my key achievements include:</p>
    

    <p>I am excited about the opportunity to contribute to <strong>${companyName}</strong> and to further develop my skills in machine learning and AI. I look forward to the possibility of discussing how my background, skills, and enthusiasms align with your needs.</p>

    <p>Thank you for considering my application. I am eager to provide any additional information needed and am available at your earliest convenience for an interview. I have also attached my resume.</p>

    <p>Sincerely,</p>

    <p><strong>Arshman Kumar</strong></p>
</body>
</html>
`;

export const DevCoverLetter = (
  date,
  EName,
  companyName,
  companyAddress,
  specificPosition,
  foundWhere,
  aboutCompany
) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cover Letter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="text-align: right;">
        <h1 style="margin: 0;">Arshman Kumar</h1>
        <p style="margin: 0;">
            <a href="mailto:arshmankumar2003@gmail.com">arshmankumar2003@gmail.com</a> |
           
            <a href="https://github.com/Arshman19">github.Arshman19</a> |
           
        </p>
    </div>
    
    <p>${date}</p>

    <p>
        ${EName} <br>
        ${companyName} <br>
        ${companyAddress} <br>
    </p>

    <p>Dear ${EName},</p>

    <p>I am writing to express my interest in the <strong>${specificPosition}</strong> at <strong>${companyName}</strong>, as advertised on <strong>${foundWhere}</strong>. With a solid foundation in full-stack development, hands-on experience with industry-leading technologies, and a proven track record of impactful project work, I am excited about the opportunity to contribute to your innovative team.</p>

    <p>I am currently pursuing my <strong>B.Tech in XYZ</strong> at <strong>Netaji Subhas University of Technology</strong>, where I have maintained a <strong>CGPA of ${cgpa}</strong>. During my studies, I have developed a strong proficiency in a variety of programming languages including C++, Python, Java, and JavaScript. My education has equipped me with a deep understanding of both the theoretical and practical aspects of software development and artificial intelligence.</p>

    

    

   

    <p>I am particularly drawn to <strong>${companyName}</strong> because of <strong>${aboutCompany}</strong>. I am confident that my technical expertise, coupled with my passion for continuous learning and innovation, would make me a valuable addition to your team.</p>

    <p>Thank you for considering my application. I am looking forward to the possibility of discussing how my background, skills, and certifications will be beneficial to <strong>${companyName}</strong>. Please feel free to contact me at arshmankumar2003@gmail.com to schedule an interview. I have also attached my resume.</p>

    <p>Sincerely,</p>

    <p><strong>Arshman Kumar</strong></p>
</body>
</html>

`;

export const queryLetter = (
  date,
  EName,
  companyName,
  companyAddress,
  aboutCompany
) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Query Letter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="text-align: right;">
        <h1 style="margin: 0;">Arshman Kumar</h1>
        <p style="margin: 0;">
            <a href="mailto:arshmankumar2003@gmail.com">arshmankumar2003@gmail.com</a> |
            <a href="https://github.com/Arshman19">github.Arshman19</a> |
        </p>
    </div>
    
    <p>${date}</p>

    <p>
        ${EName} <br>
        ${companyName} <br>
        ${companyAddress} <br>
    </p>

    <p>Dear ${EName},</p>

    <p>I am writing to inquire about potential opportunities at <strong>${companyName}</strong> for either an internship or a full-time position. With a strong academic background in Artificial Intelligence, coupled with hands-on experience in both machine learning and full-stack development, I am eager to bring my skills to your esteemed company.</p>

    <p>I am currently pursuing a <strong>B.Tech in xyz</strong> at <strong>Netaji Subhas University of Technology</strong>, where I have maintained a CGPA of ${cgpa}. My education has provided me with a robust foundation in various aspects of software development and artificial intelligence.</p>

    
    
    <p>Along side my technical skills, I have also developed a keen interest in the field of data science and have worked on various projects that have allowed me to apply my knowledge in this domain. Some of my notable achievements include:</p>
    
    

    <p>I am particularly impressed by <strong>${companyName}</strong> because <strong>${aboutCompany}</strong> and would love the opportunity to contribute to your team. I am available for an internship starting October 2024 and for a full-time position from July 2025 onwards.</p>

    <p>Thank you for considering my query. I would be delighted to discuss how my background, skills, and aspirations align with any potential opportunities at <strong>${companyName}</strong>. Please feel free to contact me at arshmankumar2003@gmail.com.</p>
    <p>I have also attatched my resume along side!</p>

    <p>Sincerely,</p>

    <p><strong>Arshman Kumar</strong></p>
</body>
</html>
`;

export const MLResumePath = "./resumes/My_Resume_v3_ML.pdf";
export const DevResumePath = "./resumes/My_Resume_v3_Developer.pdf";

export const MLHeadline = "ML applicant with work in XAI, GANs and DL";
export const DevHeadline =
  "Full Stack Developer versed in Industry Leading Technologies";
export const queryHeadline =
  "Dynamic software and ML engineer ready to join in.";
