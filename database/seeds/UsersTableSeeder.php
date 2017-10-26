<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try {
            DB::beginTransaction();
            $user = new User();
            $user->email    = "work@tier5.us";
            $user->password = bcrypt('123456');
            $user->save();
        } catch (\Exception $e) {

            DB::rollback();

        } finally {

            DB::commit();

        }
    }
}
