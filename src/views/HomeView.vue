<template>
  <div class="portfolio-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-particles"></div>

      <div class="container position-relative">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <!-- Profile Photo -->
            <div class="profile-photo-wrapper mb-4" data-aos="zoom-in">
              <img
                src="@/assets/Pas-photo.jpg"
                alt="Zaviertan Justyn Owen"
                class="profile-photo"
              />
              <div class="profile-ring"></div>
            </div>

            <!-- Name & Title -->
            <h1 class="hero-title mb-3" data-aos="fade-up">
              Justyn Owen ZavierTan
            </h1>
            <p
              class="hero-subtitle mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Assistant Stock Controller | Emerging Web Developer
            </p>
            <p
              class="hero-description mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A highly motivated professional leveraging administrative
              efficiency (Stock Control) with emerging technical skills in "Web
              Development" (Vue.js, Bootstrap) and "Generative AI" for
              accelerated productivity and problem-solving.
            </p>

            <!-- Contact Info -->
            <div
              class="contact-badges mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span class="badge contact-badge">
                <i class="bi bi-envelope-fill me-2"></i>
                justynwen0@gmail.com
              </span>
              <span class="badge contact-badge">
                <i class="bi bi-phone-fill me-2"></i>
                +62-853-6160-9123
              </span>
              <span class="badge contact-badge">
                <i class="bi bi-geo-alt-fill me-2"></i>
                Medan, Indonesia
              </span>
            </div>

            <!-- Languages -->
            <div
              class="language-badges"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span class="badge lang-badge lang-id"
                >🇮🇩 Indonesian - Fluent</span
              >
              <span class="badge lang-badge lang-en">🇬🇧 English - Fluent</span>
              <span class="badge lang-badge lang-cn"
                >🇨🇳 Mandarin - Intermediate</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <nav class="nav-tabs-wrapper sticky-top">
      <div class="container">
        <ul class="nav nav-pills justify-content-center">
          <li class="nav-item" v-for="section in sections" :key="section.id">
            <button
              class="nav-link"
              :class="{ active: activeSection === section.id }"
              @click="activeSection = section.id"
            >
              <i :class="section.icon" class="me-2"></i>
              {{ section.label }}
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Content Sections -->
    <div class="content-wrapper">
      <div class="container">
        <!-- About Section -->
        <section v-show="activeSection === 'about'" class="content-section">
          <h2 class="section-title mb-4" data-aos="fade-right">
            <i class="bi bi-person-circle me-3"></i>
            About Me
          </h2>
          <div class="content-card" data-aos="fade-up">
            <p class="about-text">
              As an "Assistant Stock Controller", I bring hands-on practical
              knowledge in inventory management, operational efficiency, and
              system control. Beyond administrative proficiency, I am an
              enthusiastic developer constantly expanding my technical skill
              set.
            </p>
            <p class="about-text">
              I am proficient in "Frontend Development" (HTML/CSS, Bootstrap 5)
              for building responsive web solutions, actively learning "Vue.js",
              and utilizing "Git/GitHub" for effective version control. A key
              strength is my ability to leverage "Generative AI Tools" (e.g.,
              Gemini AI, ChatGPT, Copilot) for rapid problem-solving, debugging,
              and code analysis, significantly boosting efficiency.
            </p>
            <p class="about-text">
              I am driven by a strong eagerness to learn new technologies,
              thrive in both independent and team environments, and excel at
              adapting to new work environments and technical challenges.
            </p>
          </div>
        </section>

        <!-- Experience Section -->
        <section
          v-show="activeSection === 'experience'"
          class="content-section"
        >
          <h2 class="section-title mb-4" data-aos="fade-right">
            <i class="bi bi-briefcase-fill me-3"></i>
            Work Experience
          </h2>

          <!-- Work Experience Card -->
          <div class="content-card mb-4" data-aos="fade-up">
            <div
              class="d-flex flex-wrap justify-content-between align-items-start mb-4"
            >
              <div>
                <h3 class="experience-title">Assistant Stock Controller</h3>
                <p class="company-name mb-0">PT. Maju Bersama - Glugur</p>
              </div>
              <span class="badge period-badge mt-2">Nov 2024 - Dec 2024</span>
            </div>

            <div class="training-content">
              <ul class="experience-list">
                <li>
                  <span class="bullet-icon">▸</span>
                  <span class="bullet-text"
                    >Managing inventory levels and maintaining accurate stock
                    records manually as well as through computerized
                    systems</span
                  >
                </li>
                <li>
                  <span class="bullet-icon">▸</span>
                  <span class="bullet-text"
                    >Responsible for annual stock inventory scheduling and
                    ensuring smooth transactions between Purchasing team and
                    Shipment team</span
                  >
                </li>
                <li>
                  <span class="bullet-icon">▸</span>
                  <span class="bullet-text"
                    >Establishing good communication with suppliers to maintain
                    delivery schedules</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Training & Course Card -->
          <div
            class="content-card training-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="training-header mb-4">
              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="training-icon">
                  <i class="bi bi-cpu-fill"></i>
                </div>
                <div>
                  <h3 class="experience-title mb-1">
                    Microcontroller Arduino Training
                  </h3>
                  <p class="company-name mb-0">
                    Arduino Course & Training - Medan
                  </p>
                </div>
              </div>
              <span class="badge period-badge badge-training">2018</span>
            </div>

            <div class="training-content">
              <h5 class="training-subtitle mb-3">
                <i class="bi bi-lightbulb-fill me-2"></i>
                Key Learning & Skills Developed
              </h5>
              <ul class="experience-list">
                <li>
                  <span class="bullet-icon">▸</span>
                  <span class="bullet-text"
                    >Understanding fundamental electronics and programming
                    concepts</span
                  >
                </li>
                <li>
                  <span class="bullet-icon">▸</span>
                  <span class="bullet-text"
                    >Developing problem-solving abilities through hands-on
                    practical experience</span
                  >
                </li>
                <li>
                  <span class="bullet-icon">▸</span>
                  <span class="bullet-text"
                    >Creativity and innovation in designing and implementing
                    projects</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Education Section -->
        <section v-show="activeSection === 'education'" class="content-section">
          <h2 class="section-title mb-4" data-aos="fade-right">
            <i class="bi bi-mortarboard-fill me-3"></i>
            Education
          </h2>

          <div class="row g-4">
            <div class="col-lg-6" data-aos="fade-up">
              <div class="content-card h-100">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div>
                    <h4 class="edu-title">Bachelor Degree</h4>
                    <p class="edu-major">System Information</p>
                    <p class="edu-school">Universitas IBBI - Medan</p>
                  </div>
                  <span class="badge period-badge badge-success"
                    >2024 - Present</span
                  >
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="content-card h-100">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div>
                    <h4 class="edu-title">High School Diploma</h4>
                    <p class="edu-major">Social Science</p>
                    <p class="edu-school">SMA Kristen Kalam Kudus - Medan</p>
                  </div>
                  <span class="badge period-badge badge-purple"
                    >2021 - 2024</span
                  >
                </div>
              </div>
            </div>

            <div class="col-12" data-aos="fade-up" data-aos-delay="200">
              <div class="content-card certificate-card">
                <h4 class="cert-title mb-4">
                  <i class="bi bi-award-fill me-2"></i>
                  Certifications & Achievements
                </h4>

                <div class="row g-4">
                  <!-- Certificate 1 -->
                  <div class="col-md-4">
                    <div class="certificate-item" @click="openCertificate(1)">
                      <div class="cert-image-wrapper">
                        <img
                          src="@/assets/cert-grafis.jpg"
                          alt="Graphic Design Certificate"
                          class="cert-image"
                        />
                        <div class="cert-overlay">
                          <i class="bi bi-zoom-in"></i>
                          <span>Click to view</span>
                        </div>
                      </div>
                      <div class="cert-info">
                        <h5 class="cert-name">
                          Graphic Design Committee Certificate
                        </h5>
                        <p class="cert-desc">
                          Appreciation for contribution as committee member in
                          Graphic Design training
                        </p>
                        <span class="cert-badge">
                          <i class="bi bi-calendar-check me-1"></i>
                          2025
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Certificate 2 -->
                  <div class="col-md-4">
                    <div class="certificate-item" @click="openCertificate(2)">
                      <div class="cert-image-wrapper">
                        <img
                          src="@/assets/cert-webdesign.jpg"
                          alt="Web Design Certificate"
                          class="cert-image"
                        />
                        <div class="cert-overlay">
                          <i class="bi bi-zoom-in"></i>
                          <span>Click to view</span>
                        </div>
                      </div>
                      <div class="cert-info">
                        <h5 class="cert-name">
                          Web Design Committee Certificate
                        </h5>
                        <p class="cert-desc">
                          Appreciation for contribution as committee member in
                          Web Design training
                        </p>
                        <span class="cert-badge">
                          <i class="bi bi-calendar-check me-1"></i>
                          2025
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Certificate 3 -->
                  <div class="col-md-4">
                    <div class="certificate-item" @click="openCertificate(3)">
                      <div class="cert-image-wrapper">
                        <img
                          src="@/assets/cert-nvidia.jpg"
                          alt="NVIDIA AI Certificate"
                          class="cert-image"
                        />
                        <div class="cert-overlay">
                          <i class="bi bi-zoom-in"></i>
                          <span>Click to view</span>
                        </div>
                      </div>
                      <div class="cert-info">
                        <h5 class="cert-name">
                          NVIDIA Powers The World AI and Yours Certificate
                        </h5>
                        <p class="cert-desc">
                          Professional certification for completing NVIDIA AI
                          training program
                        </p>
                        <span class="cert-badge cert-badge-special">
                          <i class="bi bi-patch-check-fill me-1"></i>
                          NVIDIA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Certificate Modal/Lightbox -->
          <div
            v-if="showCertModal"
            class="cert-modal"
            @click="closeCertificate"
          >
            <div class="cert-modal-content">
              <button class="cert-close" @click="closeCertificate">
                <i class="bi bi-x-lg"></i>
              </button>
              <img
                :src="currentCertImage"
                alt="Certificate"
                class="cert-modal-image"
              />
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section v-show="activeSection === 'skills'" class="content-section">
          <h2 class="section-title mb-4" data-aos="fade-right">
            <i class="bi bi-code-slash me-3"></i>
            Skills & Proficiency
          </h2>

          <div class="row g-4">
            <!-- Technical Skills -->
            <div class="col-lg-6" data-aos="fade-up">
              <div class="content-card h-100">
                <h4 class="skills-subtitle mb-4">
                  <i class="bi bi-laptop me-2"></i>
                  Technical Skills
                </h4>

                <div class="skill-item mb-4">
                  <div class="d-flex justify-content-between mb-2">
                    <span>Microsoft Word</span>
                    <span class="skill-level">Basic</span>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="skill-item mb-4">
                  <div class="d-flex justify-content-between mb-2">
                    <span>Microsoft Excel</span>
                    <span class="skill-level">Basic</span>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="d-flex justify-content-between mb-2">
                    <span>General Ledger</span>
                    <span class="skill-level">Basic</span>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Soft Skills -->
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="content-card h-100">
                <h4 class="skills-subtitle mb-4">
                  <i class="bi bi-people-fill me-2"></i>
                  Soft Skills
                </h4>

                <div class="soft-skill-item">
                  <i class="bi bi-check-circle-fill me-2"></i>
                  Interpersonal Communication Skills
                </div>
                <div class="soft-skill-item">
                  <i class="bi bi-check-circle-fill me-2"></i>
                  Great Working Skills in Individual
                </div>
                <div class="soft-skill-item">
                  <i class="bi bi-check-circle-fill me-2"></i>
                  Great Working Skills in Teams
                </div>
                <div class="soft-skill-item">
                  <i class="bi bi-check-circle-fill me-2"></i>
                  Inventory Management
                </div>
                <div class="soft-skill-item">
                  <i class="bi bi-check-circle-fill me-2"></i>
                  Problem Solving
                </div>
              </div>
            </div>

            <!-- Information Web Development & AI Proficiency -->
            <div class="col-12" data-aos="fade-up" data-aos-delay="200">
              <div class="content-card h-100">
                <h4 class="skills-subtitle mb-4">
                  <i class="bi bi-gear-fill me-2"></i>
                  Web Development & AI Proficiency
                </h4>

                <div class="skill-group-list">
                  <div class="skill-group-item">
                    <h5 class="skill-group-title">
                      <i class="bi bi-display me-2"></i>
                      Frontend & UI/UX
                    </h5>
                    <ul class="tag-list">
                      <li>Vue.js (Framework)</li>
                      <li>Bootstrap 5 (CSS Framework)</li>
                      <li>HTML5 / CSS3 / JavaScript</li>
                      <li>Responsive Web Profile Design (End-to-End)</li>
                      <li>Figma (Basic Prototyping - *In Learning Process*)</li>
                    </ul>
                  </div>

                  <div class="skill-group-item">
                    <h5 class="skill-group-title">
                      <i class="bi bi-server me-2"></i>
                      Backend & Data
                    </h5>
                    <ul class="tag-list">
                      <li>Node.js (Basic Understanding)</li>
                      <li>MySQL (Academic Proficiency)</li>
                    </ul>
                  </div>

                  <div class="skill-group-item">
                    <h5 class="skill-group-title">
                      <i class="bi bi-robot me-2"></i>
                      AI & Code Analysis
                    </h5>
                    <ul class="tag-list">
                      <li>
                        Generative AI Tools (ChatGPT, Gemini AI, Copilot, etc.)
                      </li>
                      <li>AI-Assisted Problem Solving & Debugging</li>
                      <li>Codebase Analysis & Web Cloning</li>
                    </ul>
                  </div>

                  <div class="skill-group-item">
                    <h5 class="skill-group-title">
                      <i class="bi bi-server me-2"></i>
                      Deployment & DevOps
                    </h5>
                    <ul class="tag-list">
                      <li>Vercel (Deployment and CDN)</li>
                      <li>Git & GitHub (Version Control)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section v-show="activeSection === 'projects'" class="content-section">
          <h2 class="section-title mb-4" data-aos="fade-right">
            <i class="bi bi-github me-3"></i>
            My Projects
          </h2>

          <div class="content-card mb-4" data-aos="fade-up">
            <p class="about-text mb-4">
              I have successfully developed several web-based projects,
              including a "Responsive Web Profile" and practice projects such as
              a "Food Menu Website" and a "Mental Health Website". All source
              code and live demos are available via the links below.
            </p>

            <div class="row g-4 justify-content-center mb-5">
              <!--Profile Github -->
              <div class="col-md-6">
                <a
                  href="https://github.com/justynwen0"
                  target="_blank"
                  class="project-link-card pages-card h-100"
                >
                  <i class="bi bi-person-circle project-icon me-3"></i>
                  <div>
                    <h5 class="project-title">Main GitHub Profile</h5>
                    <p class="project-desc">
                      View my contribution summary, activity, and pinned
                      projects on my main profile.
                    </p>
                  </div>
                </a>
              </div>

              <!--Repository Github -->
              <div class="col-md-6">
                <a
                  href="https://github.com/justynwen0?tab=repositories"
                  target="_blank"
                  class="project-link-card github-card h-100"
                >
                  <i class="bi bi-github project-icon me-3"></i>
                  <div>
                    <h5 class="project-title">Complete Repository List</h5>
                    <p class="project-desc">
                      Direct access to the comprehensive list of all my source
                      codes and projects.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Featured Projects -->
            <h4 class="skills-subtitle mb-4">
              <i class="bi bi-code-square me-2"></i>
              Featured GitHub Pages Projects (Live Demo)
            </h4>

            <div class="row g-4">
              <div class="col-lg-4 col-md-6" data-aos="fade-up">
                <a
                  href="https://justynwen0.github.io/My-Resume-Bootstrap/"
                  target="_blank"
                  class="project-item-card h-100"
                >
                  <h5 class="project-item-title mb-2">
                    My-Resume-Bootstrap (Web Profile)
                  </h5>
                  <p class="project-item-desc mb-3">
                    Responsive personal Web Profile/CV project built using
                    Bootstrap.
                  </p>
                  <span class="badge project-badge badge-primary"
                    ><i class="bi bi-bootstrap me-1"></i> Bootstrap 5</span
                  >
                  <span class="badge project-badge badge-secondary"
                    ><i class="bi bi-display me-1"></i> Web Profile</span
                  >
                </a>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a
                  href="https://justynwen0.github.io/Web-Kesehatan-Mental/"
                  target="_blank"
                  class="project-item-card h-100"
                >
                  <h5 class="project-item-title mb-2">Mental Health Website</h5>
                  <p class="project-item-desc mb-3">
                    Practice project for an informative website using basic
                    HTML/CSS.
                  </p>
                  <span class="badge project-badge badge-primary"
                    ><i class="bi bi-file-code me-1"></i> HTML/CSS</span
                  >
                  <span class="badge project-badge badge-secondary"
                    ><i class="bi bi-heart me-1"></i> Web Practice</span
                  >
                </a>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  href="https://justynwen0.github.io/Web-Menu-Masakan-Soto/"
                  target="_blank"
                  class="project-item-card h-100"
                >
                  <h5 class="project-item-title mb-2">Soto Menu Website</h5>
                  <p class="project-item-desc mb-3">
                    Practice project to create a food menu display (*food
                    website*).
                  </p>
                  <span class="badge project-badge badge-primary"
                    ><i class="bi bi-file-code me-1"></i> HTML/CSS</span
                  >
                  <span class="badge project-badge badge-secondary"
                    ><i class="bi bi-cup-hot me-1"></i> Web Practice</span
                  >
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Footer CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="cta-card text-center" data-aos="zoom-in">
              <h3 class="cta-title mb-3">Let's Connect!</h3>
              <p class="cta-text mb-4">
                I'm always open to new opportunities and collaborations
              </p>
              <button class="btn btn-download" @click="downloadCV">
                <i class="bi bi-download me-2"></i>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  name: "HomeView",
  data() {
    return {
      activeSection: "about",
      sections: [
        { id: "about", label: "About", icon: "bi bi-person-circle" },
        { id: "experience", label: "Experience", icon: "bi bi-briefcase-fill" },
        { id: "education", label: "Education", icon: "bi bi-mortarboard-fill" },
        { id: "skills", label: "Skills", icon: "bi bi-code-slash" },
        { id: "projects", label: "Projects", icon: "bi bi-github" },
      ],
      showCertModal: false,
      currentCertImage: "",
    };
  },
  methods: {
    downloadCV() {
      // Buat element link temporary
      const link = document.createElement("a");
      link.href = "/Resume.pdf";
      link.download = "Resume_Zaviertan_Justyn_Owen.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    // Fungsi untuk membuka modal sertifikat
    openCertificate(certNumber) {
      const certImages = {
        1: require("@/assets/cert-grafis.jpg"),
        2: require("@/assets/cert-webdesign.jpg"),
        3: require("@/assets/cert-nvidia.jpg"),
      };
      this.currentCertImage = certImages[certNumber];
      this.showCertModal = true;
      document.body.style.overflow = "hidden";
    },
    closeCertificate() {
      this.showCertModal = false;
      document.body.style.overflow = "auto";
    },
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
    });
  },
};
</script>

<style scoped>
.portfolio-wrapper {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 100px 0 80px;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(59, 130, 246, 0.1),
    rgba(147, 51, 234, 0.1)
  );
}

.hero-particles {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(59, 130, 246, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(168, 85, 247, 0.15) 0%,
      transparent 50%
    );
}

.profile-photo-wrapper {
  position: relative;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.profile-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.profile-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
  z-index: 1;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.75rem;
  color: #93c5fd;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: #cbd5e1;
  max-width: 700px;
  margin: 0 auto;
}

.contact-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.contact-badge {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #e2e8f0;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.contact-badge:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.language-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.lang-badge {
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  border-radius: 50px;
  font-weight: 500;
}

.lang-id {
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.lang-en {
  background: rgba(168, 85, 247, 0.2);
  color: #d8b4fe;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.lang-cn {
  background: rgba(236, 72, 153, 0.2);
  color: #fbcfe8;
  border: 1px solid rgba(236, 72, 153, 0.3);
}

/* Navigation Tabs */
.nav-tabs-wrapper {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.nav-pills .nav-link {
  color: #cbd5e1;
  padding: 0.75rem 1.5rem;
  margin: 0 0.25rem;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-pills .nav-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.nav-pills .nav-link.active {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Content Sections */
.content-wrapper {
  padding: 80px 0;
}

.content-section {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
}

.section-title i {
  color: #3b82f6;
}

.content-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(59, 130, 246, 0.3);
}

.about-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin: 0;
}

/* Experience */
.experience-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.company-name {
  font-size: 1.2rem;
  color: #60a5fa;
  font-weight: 500;
  margin: 0;
}

.period-badge {
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.badge-success {
  background: rgba(34, 197, 94, 0.2);
  color: #86efac;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.badge-purple {
  background: rgba(168, 85, 247, 0.2);
  color: #d8b4fe;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-list li {
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 20px 1fr; /* 👈 Icon 20px, text sisanya */
  gap: 0.75rem; /* 👈 Jarak antara icon dan text */
  align-items: flex-start; /* 👈 Align ke atas */
}

.bullet-icon {
  color: #3b82f6;
  font-size: 1.2rem;
  display: block;
  padding-top: -10rem; /* 👈 Adjust ini kalau mau geser icon aja */
}

.bullet-text {
  color: #cbd5e1;
  display: block;
  text-align: start;
}

/* Training Card Styles */
.training-card {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1),
    rgba(168, 85, 247, 0.1)
  );
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.training-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

.training-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
  flex-shrink: 0;
}

.badge-training {
  background: rgba(168, 85, 247, 0.2);
  color: #d8b4fe;
  border: 1px solid rgba(168, 85, 247, 0.3);
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
}

.training-subtitle {
  color: #93c5fd;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.training-subtitle i {
  color: #fbbf24;
}

.training-content {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive untuk Training Header */
@media (max-width: 768px) {
  .training-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .training-header .d-flex.align-items-center.gap-3.mb-3 {
    flex-direction: column;
    align-items: center;
  }

  .training-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}

/* Education */
.edu-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.edu-major {
  font-size: 1.1rem;
  color: #93c5fd;
  margin-bottom: 0.25rem;
}

.edu-school {
  color: #cbd5e1;
  margin: 0;
}

.certificate-card {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.15),
    rgba(168, 85, 247, 0.15)
  );
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.cert-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.cert-title i {
  color: #fbbf24;
}

.cert-item {
  color: #cbd5e1;
  font-size: 1.05rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cert-item i {
  color: #fbbf24;
}

/* Skills */
.skills-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.skill-item {
  color: #cbd5e1;
}

.skill-level {
  color: #60a5fa;
  font-weight: 500;
}

.progress {
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 1s ease;
}

.soft-skill-item {
  color: #cbd5e1;
  font-size: 1.05rem;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  background: rgba(168, 85, 247, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(168, 85, 247, 0.2);
  transition: all 0.3s ease;
}

.soft-skill-item:hover {
  background: rgba(168, 85, 247, 0.15);
  transform: translateX(5px);
}

.soft-skill-item i {
  color: #a78bfa;
}

/* Styling for the new Web Dev & AI Proficiency section */
.skill-group-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-group-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #60a5fa; /* Blue color for titles */
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-group-title i {
  color: #fca311; /* Yellowish icon */
}

.tag-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag-list li {
  background: rgba(147, 51, 234, 0.2); /* Purple background */
  color: #d8b4fe; /* Light purple text */
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(147, 51, 234, 0.3);
  transition: all 0.2s ease;
}

.tag-list li:hover {
  background: rgba(147, 51, 234, 0.3);
  transform: translateY(-2px);
}

/* --- Styling for Projects Section --- */
.project-icon {
  font-size: 2.5rem;
  min-width: 50px;
  color: #8b5cf6; /* Accent color */
}

.github-card .project-icon {
  color: #ffffff; /* White icon for GitHub */
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}

.project-desc {
  font-size: 0.95rem;
  color: #cbd5e1;
  margin: 0;
}

/* Projects List Card */
.project-item-card {
  display: block;
  padding: 1.5rem;
  border-radius: 15px;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(84, 114, 219, 0.3);
  border-color: #3b82f6;
}

.project-item-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: white;
}

.project-item-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;
}

.project-badge {
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  margin-right: 0.5rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.badge-primary {
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.badge-secondary {
  background: rgba(168, 85, 247, 0.2);
  color: #d8b4fe;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

@media (max-width: 768px) {
  .project-link-card {
    flex-direction: column;
    text-align: center;
  }
  .project-icon {
    margin-bottom: 1rem;
    margin-right: 0 !important;
  }
}

/* CTA Section */
.cta-section {
  padding: 80px 0 100px;
}

.cta-card {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.cta-text {
  color: #ddd6fe;
  font-size: 1.1rem;
}

.btn-download {
  background: white;
  color: #3b82f6;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-download:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  background: #f1f5f9;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .profile-photo {
    width: 140px;
    height: 140px;
  }

  .contact-badges,
  .language-badges {
    flex-direction: column;
  }

  .nav-pills {
    flex-wrap: wrap;
  }

  .section-title {
    font-size: 2rem;
  }

  .content-card {
    padding: 1.5rem;
  }
}

/* Certificate Cards */
.certificate-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.certificate-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}

.cert-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 70%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
}

.cert-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.certificate-item:hover .cert-image {
  transform: scale(1.1);
}

.cert-overlay {
  position: absolute;
  inset: 0;
  background: rgba(59, 130, 246, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 2rem;
}

.certificate-item:hover .cert-overlay {
  opacity: 1;
}

.cert-overlay span {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 600;
}

.cert-info {
  padding: 1.5rem;
}

.cert-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.cert-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.cert-badge-special {
  background: rgba(118, 185, 0, 0.2);
  color: #a3e635;
  border-color: rgba(118, 185, 0, 0.3);
}

/* Certificate Modal */
.cert-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

.cert-modal-content {
  position: relative;
  max-width: 1200px;
  max-height: 90vh;
  width: 100%;
}

.cert-modal-image {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.cert-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.cert-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
