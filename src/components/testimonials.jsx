import React from "react";

const testimonasElement = [
  {
    name: "Maria Smantha",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    role: " Web Developer",
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eosid officiis hic tenetur quae quaerat ad velit ab hic.",
    stars:
      "M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z",
  },
  {
    name: "Lisa Cudrow",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    role: " Graphic Designer",
    message:
      " Ut enim ad minima veniam, quis nostrum exercitationem ullamcorporis suscipit laboriosam, nisi ut aliquid commodi.",
    stars:
      "M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z",
  },
  {
    name: "John Smith",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
    role: "Marketing Specialist",
    message:
      " At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti.",
    stars:
      "M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z",
  },
];

const Testimonals = () => {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32 text-center">
        <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

        <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          {testimonasElement.map((testimonal, index) => {
            return (<div class="mb-0">
                  <div class="mb-6 flex justify-center">
                    <img
                      src={testimonal.image}
                      class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                    />
                  </div>
                  <h5 class="mb-2 text-lg font-bold">{testimonal.name}</h5>
                  <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                    {testimonal.role}
                  </h6>
                  <p class="mb-4">
                    {testimonal.message}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="inline-block w-6"
                    >
                      <path
                        fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                      />
                    </svg>
                  </p>
                  <ul class="mb-0 flex justify-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
           
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Testimonals;
