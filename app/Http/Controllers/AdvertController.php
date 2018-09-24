<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;

class AdvertController extends Controller {

	public function createAdvert(Request $request) {		

	 // правила валидации	 
	 $rules = ["data.item1"=>"required|email|max:212"];

	 // сообщения валидации	 
	 $messages = ["email"=>"Не верный email", "max"=>"Слишком длинный размер"];

	 $validator = Validator::make( $request->all(), $rules, $messages );

	 if ( $validator->fails() ) 
		return response()->json(["response"=>false, "msg"=>$validator->errors()->first()]);

	  return response()->json(["response"=>true, "msg"=>"Всё хорошо!"]);
	 }
}
