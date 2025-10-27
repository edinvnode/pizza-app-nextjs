import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="w-screen h-auto bg-gray-200 flex justify-center items-start flex-col">
        <h1 className="mx-auto">Pizza Shop Title</h1>
        <div className="flex flex-row justify-around">
          <Image
            src="/pizza capricciosa.jpg"
            alt="pizza image"
            height="450"
            width="450"
            className="m-2 w-2/4"
          ></Image>
          <div className="m-2 w-2/4 bg-red-50">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident animi cumque laboriosam incidunt atque temporibus, quos
              praesentium, nam doloribus alias error non aut accusantium
              asperiores? Fugiat sunt harum iste dignissimos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident animi cumque laboriosam incidunt atque temporibus, quos
              praesentium, nam doloribus alias error non aut accusantium
              asperiores? Fugiat sunt harum iste dignissimos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident animi cumque laboriosam incidunt atque temporibus, quos
              praesentium, nam doloribus alias error non aut accusantium
              asperiores? Fugiat sunt harum iste dignissimos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident animi cumque laboriosam incidunt atque temporibus, quos
              praesentium, nam doloribus alias error non aut accusantium
              asperiores? Fugiat sunt harum iste dignissimos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident animi cumque laboriosam incidunt atque temporibus, quos
              praesentium, nam doloribus alias error non aut accusantium
              asperiores? Fugiat sunt harum iste dignissimos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident animi cumque laboriosam incidunt atque temporibus, quos
              praesentium, nam doloribus alias error non aut accusantium
              asperiores? Fugiat sunt harum iste dignissimos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident animi cumque laboriosam incidunt atque temporibus, quos
              praesentium, nam doloribus alias error non aut accusantium
              asperiores? Fugiat sunt harum iste dignissimos?
            </p>
          </div>
        </div>
        <div className="my-10 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531695!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778b3a0bcb14e1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1697055980000!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-screen h-10 m-10 flex justify-center flex-col items-center">
          <h1 className="">Contact us</h1>
          <Link href="facebook.com/mypage">Facebook</Link>
          <Link href="instagram.com/mypage">Instagram</Link>
          <Link href="pinterest.com/mypage">Pinterest</Link>
          <Link href="mailto:myemail@example.com">Email</Link>
        </div>
      </div>
    </>
  );
}
