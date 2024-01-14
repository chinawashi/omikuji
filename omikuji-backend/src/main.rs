#[macro_use]
extern crate rocket;
use rand::Rng;
use rocket::http::Method;
use rocket_cors::{
    AllowedHeaders, AllowedOrigins, CorsOptions,
};

#[get("/omikuji")]
fn omikuji() -> String {
    // おみくじの結果をランダムに選択する
    let omikuji_results = vec![
        "大吉", "中吉", "小吉", "吉", "凶", "大凶"
    ];
    let random_index = rand::thread_rng().gen_range(0..omikuji_results.len());

    omikuji_results[random_index].to_string()
}

#[launch]
fn rocket() -> _ {
    let cors = CorsOptions {
        allowed_origins: AllowedOrigins::all(),
        allowed_methods: vec![Method::Get].into_iter().map(From::from).collect(),
        allowed_headers: AllowedHeaders::all(),
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .expect("Failed to create CORS configuration.");

    rocket::build()
        .mount("/", routes![omikuji])
        .attach(cors)
}
