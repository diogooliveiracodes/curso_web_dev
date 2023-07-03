<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-white -800 dark:text-white-200 leading-tight">
            {{ __('Criar post') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <form action="{{route('post.store')}}" method="post" class="bg-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
            @csrf
            <div class="mb-3">
                <label class="block text-white text-sm font-bold mb-2">Título do Post</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name="title" id="title" placeholder="Título">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="block text-white text-sm font-bold mb-2">Conteúdo do Post</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="content" id="content" rows="10" placeholder="Conteúdo">
                </textarea>
                <input type="number" name="user_id" value="1" hidden>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                 type="submit">Enviar</button>
                 <a href="{{route('dashboard')}}" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                 type="submit">Voltar</a>
        </form>
    </div>

</x-app-layout>
