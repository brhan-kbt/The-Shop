<div class="aiz-topbar border-bottom px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
    <div class=" d-flex">
        <div class="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3"
            data-toggle="aiz-mobile-nav">
            <button
                class="btn btn-icon btn-outline-secondary border-gray-300 p-0 d-flex align-items-center justify-content-center">
                <span class="aiz-mobile-toggler d-inline-block">
                    <span></span>
                </span>
            </button>
        </div>
        <div class="aiz-topbar-logo-wrap d-xl-none d-flex align-items-center justify-content-start">
            @php
                $logo = get_setting('header_logo');
            @endphp
            <a href="{{ route('admin.dashboard') }}" class="d-block">
                @if ($logo != null)
                    <img src="{{ uploaded_asset($logo) }}" class="brand-icon" alt="{{ get_setting('site_name') }}">
                @else
                    <img src="{{ static_asset('assets/img/logo.png') }}" class="brand-icon"
                        alt="{{ get_setting('site_name') }}">
                @endif
            </a>
        </div>
    </div>
    <div class="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
        <div class="d-none d-md-flex justify-content-around align-items-center align-items-stretch">
            <div class="aiz-topbar-item align-items-center">
                <a class="btn btn-outline-secondary border-gray-300 d-flex align-items-center px-3"
                    href="{{ route('cache.clear') }}">
                    <i class="las la-hdd opacity-60"></i>
                    <span class="fw-500 fs-13 ml-2 mr-0 opacity-60">{{ translate('Clear Cache') }}</span>
                </a>
            </div>

            <div class="aiz-topbar-item align-items-center ml-3">
                <a class="btn btn-outline-secondary border-gray-300 d-flex align-items-center px-3"
                    href="{{ route('home') }}" target="_blank">
                    <i class="las la-globe opacity-60"></i>
                    <span class="fw-500 fs-13 ml-2 mr-0 opacity-60">{{ translate('Browse Website') }}</span>
                </a>
            </div>
            <div class="aiz-topbar-item align-items-center dropdown ml-3 mr-0 ">
                <a class="btn btn-outline-secondary border-gray-300 d-flex align-items-center px-3"
                    href="javascript:void(0);" data-toggle="dropdown">
                    <i class="las la-plus ts-08 opacity-60"></i>
                    <span class="fw-500 fs-13 ml-2 mr-0 opacity-60">{{ translate('Add New') }}</span>
                </a>
                <div class="dropdown-menu p-3">
                    <ul class="list-group list-group-raw text-capitalize">
                        <li class="list-group-item p-2">
                            <a href="{{ route('product.create') }}"
                                class="text-reset fs-14 opacity-60">{{ translate('Add new product') }}</a>
                        </li>
                        <li class="list-group-item p-2">
                            <a href="{{ route('coupon.create') }}"
                                class="text-reset fs-14 opacity-60">{{ translate('Add new coupon') }}</a>
                        </li>
                        <li class="list-group-item p-2">
                            <a href="{{ route('offers.create') }}"
                                class="text-reset fs-14 opacity-60">{{ translate('Add New Offer') }}</a>
                        </li>
                        <li class="list-group-item p-2">
                            <a href="{{ route('staffs.create') }}"
                                class="text-reset fs-14 opacity-60">{{ translate('Add New Staff') }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-around align-items-center align-items-stretch">


            <div class="aiz-topbar-item ml-2">
                <div class="align-items-stretch d-flex dropdown">
                    <a class="dropdown-toggle no-arrow" data-toggle="dropdown" href="javascript:void(0);" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <span class="btn btn-icon p-0 d-flex justify-content-center align-items-center">
                            <span class="d-flex align-items-center position-relative">
                                <i class="las la-bell fs-24"></i>
                                @if (Auth::user()->unreadNotifications->count() > 0)
                                    <span
                                        class="badge badge-sm badge-dot badge-circle badge-primary position-absolute absolute-top-right"></span>
                                @endif
                            </span>
                        </span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-xl py-0">
                        <div class="notifications">
                            <ul class="nav nav-tabs nav-justified" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link text-dark active" data-toggle="tab" data-type="order"
                                        href="#orders-notifications" role="tab"
                                        id="orders-tab">{{ translate('Order Notifications') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" data-toggle="tab" data-type="seller"
                                        href="#sellers-notifications" role="tab"
                                        id="sellers-tab">{{ translate('Seller Notifications') }}</a>
                                </li>

                            </ul>
                            <div class="tab-content c-scrollbar-light overflow-auto"
                                style="height: 75vh; max-height: 400px; overflow-y: auto;">
                                <div class="tab-pane active" id="orders-notifications" role="tabpanel">
                                  
                                    <x-notification :notifications="auth()
                                        ->user()
                                        ->unreadNotifications()
                                        ->where('type', 'App\Notifications\DB\OrderNotification')
                                        ->take(20)
                                        ->get()" />
                                </div>
                                <div class="tab-pane" id="sellers-notifications" role="tabpanel">
                                    <x-notification :notifications="auth()
                                        ->user()
                                        ->unreadNotifications()
                                        ->where('type', 'like', '%seller%')
                                        ->take(20)
                                        ->get()" />
                                </div>
                            </div>
                        </div>

                        <div class="text-center border-top">
                            <a href="{{ route('notification.list') }}" class="text-reset d-block py-2">
                                {{ translate('View All Notifications') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- language -->
            @php
                if (Session::has('locale')) {
                    $locale = Session::get('locale', Config::get('app.locale'));
                } else {
                    $locale = env('DEFAULT_LANGUAGE');
                }
                $language = \App\Models\Language::where('code', $locale)->first();
            @endphp
            <div class="aiz-topbar-item ml-3 mr-0">
                <div class="align-items-center d-flex dropdown" id="lang-change">
                    <a class="dropdown-toggle no-arrow" data-toggle="dropdown" href="javascript:void(0);" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <span class="btn btn btn-outline-secondary border-gray-300 px-3 px-md-4">
                            <img src="{{ static_asset('assets/img/flags/' . $language->flag . '.png') }}"
                                height="11">
                            <span
                                class="fw-500 fs-13 ml-2 mr-0 opacity-60  d-none d-md-inline-block">{{ $language->name }}</span>
                        </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right dropdown-menu-xs">

                        @foreach (\App\Models\Language::where('status', 1)->get() as $key => $language)
                            <li>
                                <a href="javascript:void(0)" data-flag="{{ $language->code }}"
                                    class="dropdown-item @if ($locale == $language->code) active @endif">
                                    <img src="{{ static_asset('assets/img/flags/' . $language->flag . '.png') }}"
                                        class="mr-2">
                                    <span class="language">{{ $language->name }}</span>
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>

            <div class="aiz-topbar-item ml-3 mr-0">
                <div class="align-items-center d-flex dropdown">
                    <a class="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" href="javascript:void(0);"
                        role="button" aria-haspopup="false" aria-expanded="false">
                        <span class="d-flex align-items-center">
                            <span class="d-none d-md-block">
                                <span class="d-block fw-500">{{ Auth::user()->name }}</span>
                                <span class="d-block small opacity-60">{{ Auth::user()->user_type }}</span>
                            </span>
                            <span class="avatar avatar-sm ml-md-2 mr-0">
                                <img src="{{ uploaded_asset(Auth::user()->avatar) }}"
                                    onerror="this.onerror=null;this.src='{{ static_asset('assets/img/avatar-place.png') }}';">
                            </span>
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-md">
                        <a href="{{ route('profile.index') }}" class="dropdown-item">
                            <i class="las la-user-circle"></i>
                            <span>{{ translate('Profile') }}</span>
                        </a>

                        <a href="{{ route('logout') }}" class="dropdown-item">
                            <i class="las la-sign-out-alt"></i>
                            <span>{{ translate('Logout') }}</span>
                        </a>
                    </div>
                </div>
            </div><!-- .aiz-topbar-item -->
        </div>
    </div>
</div><!-- .aiz-topbar -->
