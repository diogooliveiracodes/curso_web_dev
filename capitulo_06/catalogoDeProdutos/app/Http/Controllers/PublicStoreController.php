<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Company;
use App\Models\Product;
use Illuminate\Http\Request;

class PublicStoreController extends Controller
{
    public function index(int $company_id)
    {
        $products =Product::where('company_id', $company_id)
            ->orderByDesc('created_at');


        return view('public.index', [
            'company' => Company::findOrFail($company_id),
            'products' =>$products->paginate(10),
            'categories' => Category::where('company_id', $company_id)->get()
        ]);
    }
}
