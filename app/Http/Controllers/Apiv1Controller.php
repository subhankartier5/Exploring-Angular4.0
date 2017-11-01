<?php

namespace App\Http\Controllers;

use App\SkillSets;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Mockery\Exception;
use Tymon\JWTAuth\Exceptions\JWTException;

class Apiv1Controller extends Controller
{
    /**
     * authenticate the user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticate(Request $request) {
        if ($request->has('email') && $request->has('password')) {

            $credentials = $request->only('email', 'password');
            $token = "";

            try {
                $token = JWTAuth::attempt($credentials);
                /* token will be false if unauthenticated else there will be a token */
                if(!$token) {
                    return response()->json([
                        'status' => false,
                        'response' => 'Unauthorized ! wrong email or password.',
                    ], 401);
                } else {
                    return response()->json([
                        'status' => true,
                        'response' => 'Successfully logged In!',
                        'token' => $token
                    ], 200);
                }
            } catch (JWTException $j) {
                return response()->json([
                    'status' => false,
                    'response' => 'Could not be able to authorize. Token generation faliure.',
                ], 403);
            }
        } else {
            return response()->json([
               'status' => false,
               'response' => 'Please provide required credentials!'
            ], 500);
        }
    }

    /**
     * get Technologies list
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTechnologies() {
        try {

            $technologies = SkillSets::all();

            return response()->json([
                'status' => true,
                'response' => $technologies
            ],200);

        } catch (Exception $e) {

            return response()->json([
                'status' => false,
                'response' => $e->getMessage()
            ],$e->getCode());

        }
    }
}
