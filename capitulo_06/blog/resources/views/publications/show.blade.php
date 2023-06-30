<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Show') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <h1 class="text-3xl font-bold">{{ $publication->title }}</h1>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-2">{{ $publication->content }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-300">{{ $publication->created_at }}</p>
                </div>
            </div>
        </div>
    </div>

</x-app-layout>
