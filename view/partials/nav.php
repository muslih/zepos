<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/back-end">Evolution Distro</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">

                <!-- /.dropdown -->
                <li>
                    <a href="#"><strong> <?= $_SESSION['nama'] ?> </strong> | <?= $_SESSION['nama_toko'] ?></a>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="?page=user&edit=<?= $_SESSION['user']?> "><i class="fa fa-user fa-fw"></i> Profil</a>
                        </li>
                        <li><a href="?page=user&editpsswd=<?= $_SESSION['user']?>"><i class="fa fa-gear fa-fw"></i> Ganti Password</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="?aksi=keluar"><i class="fa fa-sign-out fa-fw"></i> Keluar</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <!-- menu#navigasi -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <a class="active" href="?page=dash"><i class="fa fa-dashboard fa-fw"></i> Dasbor</a>
                        </li>

                        <!-- menu master -->
                        <li>
                            <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Master<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li><a href="?page=toko">Toko</a></li>
                                <li>
                                    <a href="?page=user">User</a>
                                </li>
                                <li>
                                    <a href="?page=kategori">Kategori</a>
                                </li>
                                <!-- <li><a href="#">Satuan Barang</a></li> -->
                                <li><a href="?page=merk">Merk</a></li>
                                
                                <li><a href="?page=barang">Barang</a></li>
                                
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>

                       
                        

                        <!-- menu gudang -->
                        <!-- <li>
                            <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Gudang<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="?page=pembelian">Pembelian</a>
                                </li>
                                <li>
                                    <a href="?page=stok">Stok Barang</a>
                                </li>
                            </ul> -->
                            <!-- /.nav-second-level
                        </li> -->

                        <!-- menu kasir -->
                        <li>
                            <a href="?page=mesin"><i class="fa fa-shopping-cart fa-fw"></i> Kasir Retail</a>
                            <!-- <ul class="nav nav-second-level">
                                <li>
                                    <a href="?page=mesin">Mesin</a>
                                </li>
                                <li>
                                    <a href="?page=setoran">Setoran</a>
                                </li>
                            </ul> -->
                            <!-- /.nav-second-level -->
                        </li>

                        <!-- menu grosir -->
                        <li>
                            <a href="#"><i class="fa fa-money fa-fw"></i> Grosir<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="?page=grosir">Kasir Grosir</a>
                                </li>
                                <li><a href="?page=grosir&hal=data">Pelanggan</a></li>
                                <li>
                                    <a href="?page=grosir&hal=transaksi">Transaksi</a>
                                </li>
                                <li>
                                    <a href="?page=grosir&hal=penjualan">Penjualan</a>
                                </li>
                                <li>
                                    <a href="?page=grosir&hal=profit">Profit</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>

                        <!-- menu laporan -->
                        <li><a href="#"><i class="fa fa-tasks fa-fw"></i> Laporan<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="?page=stok">Stok</a>
                                </li>
                                <li>
                                    <a href="?page=penjualan">Penjualan</a>
                                </li>
                                <li>
                                    <a href="?page=pembelian">Pembelian</a>
                                </li>
                                <li>
                                    <a href="?page=profit">Profit</a>
                                </li>
                                <li><a href="#">Statistik</a></li>
                            </ul>
                        </li>

                        <!-- menu cabang -->
                        <!-- <li>
                            <a href="#"><i class="fa fa-sitemap fa-fw"></i> Cabang<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                            	<li>
                            		<a href="#">Stok Cabang</a>
                            	</li>
                                <li>
                                    <a href="blank.html">Laporan<span class="fa arrow"></span></a>
                                    <ul class="nav nav-second-level">
                                        <li>
                                            <a href="#">Penjualan</a>
                                        </li>
                                        <li>
                                            <a href="#">Pembelian</a>
                                        </li>
                                        <li>
                                            <a href="#">Profit Penjualan</a>
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </li> -->
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>