<x-app-layout>

    <div class="bg-gray-800 p-8">
        <div class="sm:max-w-7xl mx-auto flex sm:px-4">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('Products') }}
            </h2>
        </div>
    </div>

    <div class="mx-auto px-4 sm:max-w-7xl">
        <form action="{{route('products.update', $product)}}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="relative mt-4 rounded-md shadow-sm">
                {{-- NAME --}}
                <input type="text" name="name" id="name" required
                    class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value="{{$product->name}}">
                {{-- CATEGORY --}}
                <select name="category_id" id="category_id" required
                    class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Selecione uma categoria">
                    <option value="{{$product->category->id}}" selected>{{$product->category->name}}</option>
                    @foreach($categories as $category)
                        @if($category->id == $product->category->id)
                            @continue
                        @endif
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
                    <input value="{{$product->price}}"
                        type="text" name="price" id="price" required
                        class="price appearance-none no-spinners mt-4 block w-full rounded-md border-0 py-1.5 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
                {{-- DESCRIPTION --}}
                <textarea name="description" id="description" cols="30" rows="10" required maxlength="255"
                    class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Descrição do produto">{{$product->description}}</textarea>
                {{-- IMAGE --}}
                <input type="file" name="image[]" id="image" placeholder="Imagem do produto" multiple
                class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Imagem do produto" accept="image/png, image/jpeg">
            </div>
            <div class="flex gap-x-4 pb-4">
                <button class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400
                    rounded shadow"
                    type="submit">
                    Update
                </button>
        </form>
                <form action="{{route('products.index')}}" method="get"
                    onsubmit="return confirm('Tem certeza que deseja voltar?')">
                    <button href="{{route('products.index')}}"  onsubmit="return confirm('Tem certeza que deseja voltar?')"
                        class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        type="submit">
                        Back
                    </button>
                </form>
            </div>
    </div>
    {{-- PHOTOS SHOW --}}
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        @foreach($product->photos as $photo)
            <div class="bg-white p-4 rounded-lg shadow">
                <form action="{{route('products.photo.destroy', $photo->id)}}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" onclick="return confirm('Tem certeza que deseja excluir?')"
                        class="bg-red-500 text-white rounded-full px-2 py-1"
                        >&times;</button>
                </form>
                <img src="{{asset('storage/'.$photo->path)}}" alt="{{$product->name}}"
                    class="w-full h-40 object-cover rounded">
            </div>
        @endforeach
    </div>

</x-app-layout>
