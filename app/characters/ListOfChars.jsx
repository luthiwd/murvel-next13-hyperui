import { Link } from "next/link";
import { Image } from "next/image";
import axios from "axios";

const fetchCharacters = () => {
  return axios
    .get(
      `http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&ts=1&apikey=ad722abcf3a3e69d47852911759f0d6f&hash=9ce4cb5ecb6b7534f6a4cd9a7d358c15`
    )
    .then((res) => res.data);
};

export async function ListOfChars() {
  const characters = await fetchCharacters();
  return (
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8">
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.data.results.map((char) => {
            return (
              <a
                key={char.id}
                href="#"
                class="group relative block h-full bg-black before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
              >
                <img
                  alt={char.name}
                  src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                  class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                    {char.name}
                  </p>

                  <p class="text-2xl font-bold text-white">Tony Wayne</p>

                  <div class="mt-64">
                    <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p class="text-sm text-white">
                        {char.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
