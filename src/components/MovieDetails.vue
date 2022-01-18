






<template>
  <div class="container pt-2.5 md:container md:mx-auto">
    <div class="flex flex-wrap -mx-2 mb-8">
      <div class="w-full lg:w-1/3 px-2">
        <img :src="showImage" class="object-cover h-auto w-96 rounded-lg" />
      </div>
      <div class="w-full lg:w-1/2 px-2">
        <table class="min-w-full leading-normal">
          <tbody>
            <tr>
              <td class="px-5 py-2 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>Budget:</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2 text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  ${{ content ? numberWithCommas(content.budget) : "-" }}
                </p>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>Revenue:</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2 text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  ${{ content ? numberWithCommas(content.revenue) : "-" }}
                </p>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>releaseDate:</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2 text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ content ? content.release_date : "-" }}
                </p>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>Runtime:</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2 text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ content ? timeConvert(content.runtime) : "-" }}
                </p>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>Score:</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2 text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ content ? content.vote_average : "-" }}
                  ({{ content ? content.vote_count : "-" }} votes)
                </p>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>genres:</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2 text-sm">
                <span
                  class="text-gray-900 whitespace-no-wrap pr-2"
                  v-for="(item, index) in content.genres"
                  :key="index"
                >
                  <span>{{ item ? item.name : "-" }}</span>
                </span>
              </td>
            </tr>
            <tr v-if="content.homepage">
              <td class="px-5 py-2 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>Homepage:</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-2 text-sm">
                <a
                  class="text-blue-400 whitespace-no-wrap underline"
                  :href="content.homepage"
                  target="_blank"
                >
                  Link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <div class="text-left py-7">
        <p>
          {{ content.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { numberWithCommas, timeConvert } from "../helpers";
export default {
  name: "MovieDetails",

  props: {
    content: {
      type: [Array, Object],
    },
  },

  computed: {
    showImage() {
      if (!this.content.poster_path) {
        return;
      }
      return `https://image.tmdb.org/t/p/original${this.content.poster_path}`;
    },
  },
  methods: {
    numberWithCommas,
    timeConvert,
  },
};
</script>