
<div class="modal-header">
    <h5 class="mb-0 h6">{{translate('Paid To Delivery Boy')}}</h5>
    <button type="button" class="close" data-dismiss="modal">
    </button>
</div>

<form class="form-horizontal" action="{{ route('paid-to-delivery-boy') }}" method="POST" enctype="multipart/form-data">

    <div class="modal-body">
        @csrf
        <div class="form-group row">
            <label class="col-md-4 col-from-label">
                {{translate('Deliver Boy')}}
            </label>
            <div class="col-md-8">
                <input type="hidden" name="delivery_boy_id" value="{{ $delivery_boy_info->user_id }}">
                <input type="text" class="form-control" value="{{ $delivery_boy_info->user->name }}" readonly="">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-4 col-from-label">
                {{translate('Total Payable')}}
            </label>
            <div class="col-md-8">
                <input type="text" class="form-control" value="{{ $delivery_boy_info->total_earning }}" readonly="">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-4 col-from-label">
                {{translate('Paid Amount')}}
            </label>
            <div class="col-md-8">
                <input type="number" class="form-control" id="paid_amount" name="paid_amount">
            </div>
        </div>

    </div>
    <div class="modal-footer">
        <button type="submit" id="payout_btn" class="btn btn-primary">{{ translate('Paid') }}</button>
        <button type="button" class="btn btn-light" data-dismiss="modal">{{translate('Cancel')}}</button>
    </div>
</form>


@section('script')
    <script type="text/javascript">

    (function($) {
    "use strict";

    })(jQuery);

    </script>
@endsection
