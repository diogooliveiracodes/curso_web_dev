<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Company;
use App\Models\Product;
use Illuminate\Http\Request;

class PublicStoreController extends Controller
{
    public function index(int $company_id, Request $request)
    {
        $products = Product::where('company_id', $company_id)
                    ->orderByDesc('created_at');
        if ($request->category_id) {
            $products->where('category_id', $request->category_id);
        }
        if ($request->product_name)
        {
            $products->where('name', 'LIKE', "%{$request->product_name}%");
        }

        $company = Company::findOrFail($company_id);
        $categories = Category::where('company_id', $company_id)->get();

        return view('public.index', [
            'company' => $company,
            'products' => $products->paginate(10),
            'categories' => $categories,
            'category_id' => $request->category_id ?? null
        ]);
    }
}
