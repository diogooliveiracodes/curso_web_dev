<x-app-layout>

    <div class="bg-gray-500 p-8">
        <div class="sm:max-w-7xl mx-auto flex sm:px-4">
            <h2 class="font-semibold text-xl text-gray-800 white:text-gray-200 leading-tight">
                {{__('Products')}}
            </h2>
        </div>
        <div class="">
            <a href="{{route('products.create')}}"
                class="white:text-gray-200 leading-tight">New Product</a>
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
<div class="mx-auto px-4 sm:max-w-7xl">
    <form action="{{route('products.store')}}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="relative mt-2 rounded-md shadow-sm">
            <input type="text" name="name" id="name" required class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nome do Produto">
        </div>
        <select name="category_id" id="category_id" required
            class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"">
            <option disabled selected hidden>Selecione uma categoria</option>
            @foreach($categories as $category)
            <option value="{{$category->id}}">{{$category->name}}</option>
            @endforeach
        </select>
        <div class="relative">
            <span class="absolute inset-y-0 left-2 mt-2 ml-3 flex items-center pointer-events-none">
             R$
            </span>
            <input type="text" name="price" id="price" required placeholder="        Preço do Produto"
                class="price appearance-none no-spinners mt-4 block w-full rounded-md border-0 py-1.5 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <textarea name="description" id="description" cols="30" rows="10" required maxlength="255"
            class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                " placeholder="Descrição do Produto">
        </textarea>
        <input type="file" id="image" name="image[]" required placeholder="Imagem do Produto" multiple
            class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-500 ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Imagem do Produto" accept="image/png, image/jpeg">
        </div>
        <div class="flex gap-x-4 pb-4">
            <button type="submit" class="bg-dark mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Create
            </button>
    </form>
        <form action="{{route('products.index')}}" method="get" onsubmit="return confirm('Tem certeza que deseja voltar?')">
            <button type="submit" href="{{route('products.index')}}" onsubmit="return confirm('Tem certeza que deseja voltar?')"
                class=" ml-4 bg-dark mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Back
            </button>
        </form>
        </div>
</div>
</x-app-layout>
