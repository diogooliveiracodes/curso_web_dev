<x-app-layout>

    <div class="flex justify-between bg-gray-800 w-full p-8">
        <div class="">
            <h2 class="font-semibold text-xl text-gray-800 white:text-gray-200 leading-tight">
                {{__('Categories')}}
            </h2>
        </div>
        <div class="">
            <a href="{{route('categories.create')}}"
                class="white:text-gray-200 leading-tight">New Category</a>
        </div>
    </div>

    <!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="mx-auto px-4">
    <form action="{{route('categories.store')}}" method="POST">
        @csrf
        <div class="relative mt-2 rounded-md shadow-sm">
            <input type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nome da Categoria">
        </div>
        <button type="submit" class="bg-dark mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Create
        </button>

    </form>

</div>

</x-app-layout>
