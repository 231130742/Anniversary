import HeroImage from "../assets/images/1.svg";
import AboutImage from "../assets/images/2.svg";
import Proyek1Image from "../assets/images/WhatsApp Image 2025-03-20 at 12.04.49_c6b866a2.jpg";
import Proyek2Image from "../assets/images/Untitled design (19).png";
import Proyek3Image from "../assets/images/WhatsApp Image 2025-03-20 at 12.04.49_9281394f.jpg";
import Proyek4Image from "../assets/images/WhatsApp Image 2025-03-20 at 12.15.37_5a2fd0e1.jpg";
import Proyek5Image from "../assets/images/proyek-5.webp";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Selamat Datang Di{" "}
              <span className="font-bold text-sky-400 underline">
                OurJourney
              </span>
            </h1>
            <p className="text-base/8 mb-7">
              Kami mencatat perjalanan kami bersama, dari awal pertemuan hingga berbagai momen penting yang telah dilewati. Di sini, kami berbagi cerita dan pengalaman yang membentuk hubungan kami.
            </p>
            <a
              href="#about"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:gap-10 md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto"/>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
            Happy 2nd Anniversary,{" "}
              <span className="font-bold text-sky-400">
                Sayang!
              </span>
            </h1>
            <p className="text-base/loose">
              Dua tahun yang penuh dengan cinta, tawa, dan tantangan yang membuat kita lebih kuat. Semoga hubungan kita ke depannya terus dipenuhi dengan kebahagiaan, saling pengertian, dan keberkahan. Aku berharap kita bisa terus tumbuh bersama, saling mendukung dalam setiap langkah, dan diberikan kekuatan untuk menghadapi setiap ujian yang datang. Semoga cinta ini selalu berkembang dan kita bisa terus menciptakan kenangan indah bersama.
            </p>
          </div>
        </div>
        <div className="service pt-32" id="kisah">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Cerita Kita</h1>
          <p className="text-center">Setiap perjalanan memiliki cerita tentang awal yang penuh harapan, momen yang tak terlupakan, dan impian yang terus tumbuh. Inilah kisah kita, yang terus kita tulis bersama.</p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-pink-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Awal Kisah Kita</h3>
                <p className="text-white text-base/loose leading-none">Semua berawal dari masa sekolah menengah atas, tepatnya di kelas 2 akhir. Saat itu, aku mengikuti event ekskul robotik sebagai ketua, sementara dia datang sebagai bagian dari ekskul jurnalistik yang bertugas mewawancarai setiap event yang berlangsung.<br></br><br></br>
                  Karena aku yang bertanggung jawab atas acara tersebut, kami pun berjanji untuk menentukan waktu take video yang nantinya akan diunggah ke media sosial dan berita. Namun, aku sempat lupa mengabari dia mengenai jadwal pengambilan video, meskipun sebelumnya dia sudah menyimpan nomor WhatsApp-nya di ponselku.<br></br><br></br>
                  Akhirnya, kami melakukan pengambilan video di sore hari setelah semua kegiatanku selesai. Tidak berhenti di situ, aku kembali menghubunginya dengan alasan membahas hasil editan video—termasuk beberapa bagian yang menurutku kurang bagus. Hal ini membuat kami harus melakukan take ulang.<br></br><br></br>
                  Seiring berjalannya waktu, obrolan kami pun mulai meluas. Dari sekadar percakapan tentang video, perlahan menjadi obrolan yang lebih santai dan menyenangkan. Awalnya tidak intens, tetapi lama-kelamaan, kami mulai saling terhubung dan semakin sering berbincang</p>
              </i>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Momen yang Tak Terlupakan</h3>
                <p className="text-white text-base/loose leading-none">Dulu, aku dan dia sering sleep call dan semakin dekat. Suatu hari, dia menangis di kelas dan teman-temannya mengira itu karena aku. Sejak saat itu, kami makin sering mengobrol dan menjadi lebih dekat. Kami mengikuti ekskul Pandu Digital setiap Kamis, sering duduk bersebelahan. Aku pernah membelikannya cokelat dan es krim, bahkan menyuruhnya keluar dari lab agar bisa memakannya sebelum cair. Kami juga sering menunggu satu sama lain setelah kegiatan selesai, meskipun saat pulang aku hanya berani menemani sampai gerbang.<br></br><br></br>
                  Sebelum pacaran, aku mengajaknya ke bioskop bersama teman-teman, dan setelah itu kami sering jalan bersama. Meski pernah aku terlambat, membuatnya menunggu lebih dari satu jam dan marah sepanjang perjalanan, kami tetap melanjutkan kebersamaan itu.<br></br><br></br>
                  Kami juga sering bertengkar, seperti saat naik motor. Dia tidak suka terlalu lama memakai helm atau duduk di motor, sementara aku suka berkeliling kota. Tapi meskipun ada pertengkaran, dia selalu ada untuk membantuku, seperti saat aku butuh bantuan membuat proposal lomba atau mengambil foto saat aku menari. Banyak momen yang tak terlupakan, yang membentuk perjalanan kami yang penuh warna—menyebalkan, menyenangkan, dan berharga.</p>
              </i>
            </div>
            <div className="box bg-pink-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Harapan untuk Masa Depan</h3>
                <p className="text-white text-base/loose leading-none">Meski jarak memisahkan kita, aku percaya setiap langkah yang kita ambil bersama akan membawa kita lebih dekat dalam cinta, pemahaman, dan komitmen. Semoga kita bisa terus menjaga komunikasi, menghadapi setiap tantangan, dan menciptakan kenangan indah yang akan menguatkan hubungan ini. Aku berharap waktu dan jarak tak menjadi penghalang bagi kita untuk meraih mimpi bersama. Semoga kita selalu saling mendukung, menjaga kepercayaan, dan tetap bertahan, hingga akhirnya kita bisa lebih dekat lagi. Aku percaya, dengan usaha dan kesabaran, kita bisa mengatasi semua rintangan yang ada dan terus melangkah menuju masa depan yang lebih indah.<br></br><br></br>
                  Semoga kita selalu diberikan kekuatan untuk saling menghargai dan menjaga cinta ini dengan sepenuh hati, meskipun tidak selalu mudah. Aku berdoa agar kita tetap sabar dalam menghadapi setiap ujian dan terus berusaha menjaga hubungan ini tetap tumbuh, meski hanya melalui pesan atau panggilan. Aku yakin, suatu hari nanti, kita akan bertemu di tempat yang lebih baik, dengan cinta yang semakin kuat dan masa depan yang penuh kebahagiaan.</p>
              </i>
            </div>
          </div>
        </div>

        <div className="proyek pt-32" id="galeri">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Galeri</h1>
        <p className="text-center">Setiap gambar adalah saksi dari momen-momen berharga yang kita lalui bersama. Dari tawa spontan, perjalanan yang tak terlupakan, hingga momen-momen sederhana yang penuh makna, semuanya terabadikan di sini. Galeri ini bukan sekadar kumpulan foto, tetapi cerminan dari perjalanan kita—kisah tentang kebersamaan, cinta, dan kenangan yang akan selalu kita simpan dalam hati. Setiap potret memiliki cerita, dan setiap cerita adalah bagian dari perjalanan yang masih terus kita tulis bersama.</p>
        <div className="proyek-box pt-12 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="box p-2 bg-white shadow">
            <img src={Proyek1Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
            <h3 className="text-xl font-bold mt-6 mb-2">Awal Ketemu</h3>
            <p className="text-base/loose">Berawal dari wawancara berlanjut ke WA, hehehe</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek2Image} alt="Proyek Image" className="w-full aspect-square object-cover"/>
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 2</h3>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias dignissimos. Aperiam in voluptates molestiae!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek3Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 3</h3>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias dignissimos. Aperiam in voluptates molestiae!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek4Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 4</h3>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias dignissimos. Aperiam in voluptates molestiae!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek5Image} alt="Proyek Image" className="w-full h-[200px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 5</h3>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias dignissimos. Aperiam in voluptates molestiae!</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
