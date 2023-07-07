<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans text-gray-900 antialiased">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <a href="/{{$blog->slug}}" class="p-6 text-gray-900 dark:text-gray-100">
                    {{Str::upper($blog->name)}} - TEMPLATE FULL
                </a>
            </div>

            @foreach($publications as $publication)
            <div class="py-4">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                            <div class="p-6 text-gray-900 dark:text-gray-100">
                                <a href="{{ route('blog.publication.show', [$blog->slug, $publication->slug] ) }}">
                                    <h1 class="text-3xl font-bold">{{ $publication->title }}</h1>
                                </a>
                                <p class="text-lg text-gray-600 dark:text-gray-400 mb-2">{{ $publication->content }}</p>
                                <p class="text-sm text-gray-500 dark:text-gray-300">{{ $publication->created_at }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </body>
</html>
