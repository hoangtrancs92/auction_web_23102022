<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IsBoth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->user()->admin_type === 1 || $request->user()->admin_type === 0){
            return $next($request);
        }
        else {
            return response()->json('Quyền không hợp lệ',401);
        }
    }
}
