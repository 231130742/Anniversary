import HeroImage from "../assets/images/1.svg";
import AboutImage from "../assets/images/2.svg";
import Proyek1Image from "../assets/images/1.jpg";
import Proyek2Image from "../assets/images/2.jpg";
import Proyek3Image from "../assets/images/3.jpg";
import Proyek4Image from "../assets/images/4.jpg";
import Proyek5Image from "../assets/images/5.jpg";
import Proyek6Image from "../assets/images/6.jpg";
import Proyek7Image from "../assets/images/7.jpg";
import Proyek8Image from "../assets/images/8.jpg";
import Proyek9Image from "../assets/images/9.jpg";
import Proyek10Image from "../assets/images/10.jpg";
import Proyek11Image from "../assets/images/11.jpg";
import Proyek12Image from "../assets/images/12.jpg";
import Proyek13Image from "../assets/images/13.jpg";
import Proyek14Image from "../assets/images/14.jpg";
import Proyek15Image from "../assets/images/15.jpg";
import Proyek16Image from "../assets/images/16.jpg";
import Proyek17Image from "../assets/images/17.jpg";
import Proyek18Image from "../assets/images/18.jpg";
import Proyek19Image from "../assets/images/19.jpg";
import Proyek20Image from "../assets/images/20.jpg";
import Proyek21Image from "../assets/images/21.jpg";
import Proyek22Image from "../assets/images/22.jpg";
import Proyek23Image from "../assets/images/23.jpg";
import Proyek24Image from "../assets/images/24.jpg";
import Proyek25Image from "../assets/images/25.jpg";
import Proyek26Image from "../assets/images/26.jpg";
import Proyek27Image from "../assets/images/27.jpg";
import Proyek28Image from "../assets/images/28.jpg";
import Proyek29Image from "../assets/images/29.jpg";
import Proyek30Image from "../assets/images/30.jpg";
import Proyek31Image from "../assets/images/31.jpg";
import Proyek32Image from "../assets/images/32.jpg";
import Proyek33Image from "../assets/images/33.jpg";
import Proyek34Image from "../assets/images/34.jpg";
import Proyek35Image from "../assets/images/35.jpg";
import Proyek36Image from "../assets/images/36.jpg";
import Proyek37Image from "../assets/images/37.jpg";
import Proyek38Image from "../assets/images/38.jpg";
import Proyek39Image from "../assets/images/39.jpg";
import Proyek40Image from "../assets/images/40.jpg";
import Proyek41Image from "../assets/images/41.jpg";
import Proyek42Image from "../assets/images/42.jpg";
import Proyek43Image from "../assets/images/43.jpg";
import Proyek44Image from "../assets/images/44.jpg";
import Proyek45Image from "../assets/images/45.jpg";
import Proyek46Image from "../assets/images/46.jpg";
import Proyek47Image from "../assets/images/47.jpg";
import Proyek48Image from "../assets/images/48.jpg";
import Proyek49Image from "../assets/images/49.jpg";
import Proyek50Image from "../assets/images/50.jpg";
import Proyek51Image from "../assets/images/51.jpg";
import Proyek52Image from "../assets/images/52.jpg";
import Proyek53Image from "../assets/images/53.jpg";
import Proyek54Image from "../assets/images/54.jpg";
import Proyek55Image from "../assets/images/55.jpg";
import Proyek56Image from "../assets/images/56.png";
import Proyek57Image from "../assets/images/57.jpg";
import Proyek58Image from "../assets/images/58.jpg";


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
                  Akhirnya, kami melakukan pengambilan video di sore hari setelah semua kegiatanku selesai. Tidak berhenti di situ, aku kembali menghubunginya dengan alasan membahas hasil editan video, termasuk beberapa bagian yang menurutku kurang bagus. Hal ini membuat kami harus melakukan take ulang.<br></br><br></br>
                  Seiring berjalannya waktu, obrolan kami pun mulai meluas. Dari sekadar percakapan tentang video, perlahan menjadi obrolan yang lebih santai dan menyenangkan. Awalnya tidak intens, tetapi lama-kelamaan, kami mulai saling terhubung dan semakin sering berbincang</p>
              </i>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Momen yang Tak Terlupakan</h3>
                <p className="text-white text-base/loose leading-none">Dulu, aku dan dia sering sleep call dan semakin dekat. Suatu hari, dia menangis di kelas dan teman-temannya mengira itu karena aku. Sejak saat itu, kami makin sering mengobrol dan menjadi lebih dekat. Kami mengikuti ekskul Pandu Digital setiap Kamis, sering duduk bersebelahan. Aku pernah membelikannya cokelat dan es krim, bahkan menyuruhnya keluar dari lab agar bisa memakannya sebelum cair. Kami juga sering menunggu satu sama lain setelah kegiatan selesai, meskipun saat pulang aku hanya berani menemani sampai gerbang.<br></br><br></br>
                  Sebelum pacaran, aku mengajaknya ke bioskop bersama teman-teman, dan setelah itu kami sering jalan bersama. Meski pernah aku terlambat, membuatnya menunggu lebih dari satu jam dan marah sepanjang perjalanan, kami tetap melanjutkan kebersamaan itu.<br></br><br></br>
                  Kami juga sering bertengkar, seperti saat naik motor. Dia tidak suka terlalu lama memakai helm atau duduk di motor, sementara aku suka berkeliling kota. Tapi meskipun ada pertengkaran, dia selalu ada untuk membantuku, seperti saat aku butuh bantuan membuat proposal lomba atau hal tugas dan pembelajaran. Banyak momen yang tak terlupakan, yang membentuk perjalanan kami yang penuh warna, menyebalkan, menyenangkan, dan berharga.</p>
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
            <h3 className="text-xl font-bold mt-3 mb-2">Awal Ketemu</h3>
            <h5 className="text-xs font-bold text-red-500">22-Juni-2022</h5>
            <p className="text-base/loose leading-5">Semua berawal dari wawancara sederhana di depan lemari piala. Awalnya hanya obrolan formal, tapi entah bagaimana, percakapan itu berlanjut ke WhatsApp. Dari sekadar tanya-jawab, jadi lebih sering berbagi cerita, saling mengenal, dan tanpa sadar, semakin dekat. Siapa sangka, momen kecil itu menjadi awal dari perjalanan yang lebih panjang.</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek2Image} alt="Proyek Image" className="w-full aspect-square object-cover"/>
            <h3 className="text-xl font-bold mt-3 mb-2">Bertukar Kado</h3>
            <h5 className="text-xs font-bold text-red-500">3-Februari-2023</h5>
            <p className="text-base/loose leading-5">Banyak hal yang sebelumnya kita lalui, termasuk saling menukar kado satu sama lain. Bukan sekadar hadiah, tapi ada makna di setiap pemberian. Mungkin kecil, mungkin sederhana, tapi selalu ada rasa yang terselip di dalamnya. Setiap tukar kado bukan hanya tentang barang, tapi juga tentang perhatian, tentang bagaimana kita saling mengingat satu sama lain. Tapi aku malu-malu, hahaha.</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek3Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-3 mb-2">Semi LDR</h3>
            <h5 className="text-xs font-bold text-red-500">5-Maret-2023</h5>
            <p className="text-base/loose leading-5">Sebelum akhirnya menjalani LDR yang jauh dan lama, kita sempat merasakan LDR selama lebih dari satu bulan setelah perpisahan. Meskipun singkat, itu jadi awal dari rasa rindu yang semakin nyata. Dari sekadar terbiasa bertemu, hingga harus menyesuaikan diri dengan jarak dan waktu. Siapa sangka, itu hanyalah permulaan dari perjalanan yang lebih panjang?</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek4Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-3 mb-2">Liburan Bareng</h3>
            <h5 className="text-xs font-bold text-red-500">29-Juli-2023</h5>
            <p className="text-base/loose leading-5">Sebelum & Sesudah LDR memisahkan, kita punya banyak momen seru yang dihabiskan bersama, termasuk saat liburan. Tertawa, menikmati perjalanan, dan menciptakan kenangan indah yang kini jadi pengobat rindu. Foto ini hanyalah salah satu dari sekian banyaknya untuk mengabadikan cerita kita. Sebenarnya masih banyak momen fhoto lain.</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek5Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-3 mb-2">LDR Dimulai</h3>
            <h5 className="text-xs font-bold text-red-500">2-Agustus-2023</h5>
            <p className="text-base/loose leading-5">Setelah melewati masa semi LDR, aku dan dia akhirnya harus menerima kenyataan bahwa kami kuliah di kota yang berbeda. Ini adalah momen sebelum benar-benar menjalani LDR yang panjang, saat di mana jarak mulai terasa, dan perpisahan bukan lagi sementara.</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek6Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-3 mb-2">Jarak & Rindu</h3>
            <h5 className="text-xs font-bold text-red-500">21-Maret-2024</h5>
            <p className="text-base/loose leading-5">Walaupun jarak memisahkan, aku dan dia tetap berusaha menjaga komunikasi, sering video call untuk melepas rindu. Ya, meskipun rasanya tidak sama, tapi mau bagaimana lagi? Semua harus dijalani. Bahkan anniversary ke-1 dan ke-2 hanya bisa dirayakan dari balik layar. Tapi bukan hanya itu, banyak momen kecil yang membuat kami tetap bahagia satu sama lain—meskipun, ya, sering berantem juga. Hahaha!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek7Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-3 mb-2">Waktu yang Terbatas</h3>
            <h5 className="text-xs font-bold text-red-500">7-Januari-2024</h5>
            <p className="text-base/loose leading-5">Momen yang paling ditunggu adalah saat bisa bertemu. Namun, sering kali aku dan dia hanya bisa bertemu ketika ada kegiatan yang sama atau keperluan tertentu. Bahkan ketika akhirnya bisa bertemu, selalu ada halangan, seperti jadwal libur kuliah yang berbeda dan banyak kendala lainnya. Tapi bagaimanapun, setiap pertemuan tetap berharga walaupun hanya satu hari.</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek8Image} alt="Proyek Image" className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold mt-3 mb-2">Usia & Cerita</h3>
            <h5 className="text-xs font-bold text-red-500">5-Januari-2025</h5>
            <p className="text-base/loose leading-5">Tahun ini, aku dan dia merayakan ulang tahun secara terpisah, tapi tetap saling terhubung. Aku dirayakan oleh temanku lewat dia, dan dia dirayakan oleh adiknya lewat aku. Meski tak bersama, kejutan kecil tetap membuat bermakna (walaupun dia sempat kesel). <br></br>
            Bertambah usia, bertambah cerita. Semoga kebahagiaan, keberkahan, dan kesuksesan selalu menyertai langkah kita. Aamiin. </p>
          </div>
        </div>
        </div>

        <p className="text-center font-medium mt-6 mb-2">Banyak momen lain yang tak terungkap satu per satu, namun tetap tersimpan dalam kenangan.</p>
        <div className="proyek-box pt-3 grid lg:grid-cols-10 sm:grid-cols-5 grid-cols-3 gap-2">
          <div className="box p-2 bg-white shadow">
            <img src={Proyek9Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek10Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek11Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek12Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek13Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek14Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek15Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek16Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek17Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek18Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek19Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek20Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek21Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek22Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek23Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek24Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek25Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek26Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek27Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek28Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek29Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek30Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek31Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek32Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek33Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek34Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek35Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek36Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek37Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek38Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek39Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek40Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek41Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek42Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek43Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek44Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek45Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek46Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek47Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek48Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek49Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek50Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek51Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek52Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek53Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek54Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek55Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek56Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek57Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek58Image} alt="Proyek Image" className="w-full aspect-square object-cover" /> {/*w-full h-[200px]*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;