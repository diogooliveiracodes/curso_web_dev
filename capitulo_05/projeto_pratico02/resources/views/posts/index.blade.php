@extends ('layouts.public')

@section('content')

<div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    @foreach($posts as $post)
                        <!-- Post preview-->
                        <div class="post-preview">
                          <a href="post.html">
                             <h2 class="post-title">{{$post->title}}</h2>
                             <h3 class="post-subtitle">{{$post->content}}</h3>
                          </a>
                          <p class="post-meta">
                               Posted by
                               <a href="#!">{{$post->user->name}}</a>
                               on {{($post->created_at)}}
                           </p>
                      </div>
                      <!-- Divider-->
                       <hr class="my-4" />
                    @endforeach
                    <div class="container">
                        {{$posts->links()}}
                    </div>
                    <!-- Pager-->
                    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="{{route('post.index')}}">Others Posts →</a></div>
                </div>
            </div>
        </div>


 

    @endsection