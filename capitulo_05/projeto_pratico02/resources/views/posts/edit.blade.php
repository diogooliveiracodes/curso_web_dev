<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Criar post') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <form action="{{ route('post.update', $post) }}" method="post" class="bg-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
            @csrf
            @method('PUT')
            <div class="mb-3">
                <label class="block text-gray-700 text-sm font-bold mb-2">Título do Post</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name="title" id="title" placeholder="Título"
                    value="{{ $post->title }}">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="block text-gray-700 text-sm font-bold mb-2">Conteúdo do Post</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="content" id="content" rows="10" placeholder="Conteúdo">
                    {{ $post->content }}
                </textarea>
                <input type="number" name="user_id" value="1" hidden>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                 type="submit">Enviar</button>
            <a href="{{route('post.index')}}" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                 type="submit">Voltar</a>
        </form>
    </div>

</x-app-layout>
