<?php 
class Barang extends Activerecord\Model{

  public static $table_name = 'barang';


  static $belongs_to = array(
	array('toko'),
	array('kategori'),
	array('merk')
  );

  static $has_many = array(
     array('stok'),
     array('kasir_retail_detail'),
     array('kasir_grosir_detail')
  );  

  static $after_destroy = array(
    'destroy_related_data'
  );

  public function destroy_related_data(){
    foreach($this->stok as $stok){
        $stok->delete();
    }
  }
  // public function before_create(){
  //   $this->dibuat = Date('d-m-Y H:i:s', strtotime('now'));
  // } 
}
