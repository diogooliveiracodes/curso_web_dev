<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{

    public function updateBlogTemplate(Request $request)
    {
        $blog = auth()->user()->blog;
        $blog->update(
            [
                'template' => $request->template
            ]
        );

        return redirect()->route('profile.edit')->with('success', 'Template atualizado com sucesso!');
    }

    public function publicGetBlog(string $slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        if ($blog) {
            $viewName = 'templates.' . $blog->template . '.index';
            $publications = $blog->publications()
                ->where('is_active', 1)
                ->orderBy('created_at', 'desc')
                ->paginate(10);
        }
        return view($viewName, compact('blog', 'publications'));
    }

    public function publicGetPublication(string $blog, string $publication)
    {
        $blog = Blog::where('slug', $blog)->firstOrFail();
        if ($blog) {
            $publication = $blog->publications()
                ->where('slug', $publication)
                ->firstOrFail();
            $viewName = 'templates.' . $blog->template . '.show';
        }
        return view($viewName, compact('blog', 'publication'));
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
