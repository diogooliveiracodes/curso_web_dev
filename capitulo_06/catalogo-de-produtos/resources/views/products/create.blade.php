<x-app-layout>

    <div class="flex justify-between bg-gray-800 w-full p-8">
        <div class="">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('Products') }}
            </h2>
        </div>
    </div>

    <div class="mx-auto px-4">
        <form action="{{route('products.store')}}" method="POST">
            @csrf
            <div class="relative mt-4 rounded-md shadow-sm">
                {{-- NAME --}}
                <input type="text" name="name" id="name"
                    class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Nome do Produto">
                {{-- CATEGORY --}}
                <select name="category_id" id="category_id" required
                    class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Selecione uma categoria">
                    <option value="" disabled selected hidden >Selecione uma categoria</option>
                    @foreach($categories as $category)
                    <option value="{{$category->id}}" >
                        {{$category->name}}
                    </option>
                    @endforeach
                </select>
                {{-- PRICE --}}
                <div class="relative">
                    <span class="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                      R$
                    </span>
                    <input type="text" name="price" id="price" required placeholder="Preço do produto"
                           class="price appearance-none no-spinners mt-4 block w-full rounded-md border-0 py-1.5 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
                {{-- DESCRIPTION --}}
                <textarea name="description" id="description" cols="30" rows="10" required maxlength="255"
                    class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Descrição do produto"></textarea>
            </div>
            <div class="flex gap-x-4">
                <button class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400
                    rounded shadow"
                    type="submit">
                    Create
                </button>
        </form>
                <form action="{{route('products.index')}}" method="get"  onsubmit="return confirm('Tem certeza que deseja excluir esta categoria?')">
                    <button href="{{route('products.index')}}"  onsubmit="return confirm('Tem certeza que deseja voltar?')"
                        class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        type="submit">
                        Back
                    </button>
                </form>
            </div>
    </div>

</x-app-layout>

