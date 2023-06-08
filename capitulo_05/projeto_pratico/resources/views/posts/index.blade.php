@extends('layouts.public')

@section('content')

<!-- Page Header-->
<header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="site-heading">
                    <h1>Tela com todos os posts</h1>
                    <span class="subheading">Leia todos os nossos posts</span>
                </div>
            </div>
        </div>
    </div>
</header>



<div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
            {{-- Laravel Paginator --}}
            {{$posts->links('pagination::bootstrap-5')}}

            @foreach($posts as $post)
                <!-- Post preview-->
                <div class="post-preview">
                    <a href="{{route('post.show', $post)}}">
                        <h2 class="post-title">{{$post->title}}</h2>
                        <h3 class="post-subtitle">{{$post->content}}</h3>
                    </a>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">{{$post->user->name}}</a>
                        on {{$post->created_at}}
                    </p>
                </div>
                <!-- Divider-->
                <hr class="my-4" />
            @endforeach

            {{-- Laravel Paginator --}}
            {{$posts->links('pagination::bootstrap-5')}}

            <!-- Pager-->
            <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="{{route('post.index')}}">Outros posts →</a></div>
        </div>
    </div>
</div>

@endsection
