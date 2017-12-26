
const mongoose = require('mongoose');

const  kullaniciSchema=mongoose.Schema({
    isim:{
        type:String
    },
    soyad:{
        type:String
    },
    kAdi:{
        type:String
    },
    sifre:{
        type:String
    },
});
const  Kullanici=module.exports=mongoose.model('Kullanici',kullaniciSchema);

module.exports.getKullanicis = (callback, limit) => {
	Kullanici.find(callback).limit(limit);
}
