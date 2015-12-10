define( [], function() {
	var view = Marionette.ItemView.extend({
		tagName: 'div',
		className: 'nf-table-row',
		template: '#nf-tmpl-edit-setting-list-option',

		initialize: function( data ) {
			this.dataModel = data.dataModel;
			this.collection = data.collection;
		},

		onRender: function() {
			jQuery( this.el ).prop( 'id', this.model.cid );
		},

		onShow: function() {
			jQuery( this.el ).find( 'input:first' ).focus();
		},

		events: {
			'change input': 'changeOption',
			'click .nf-delete': 'deleteOption',
			'keyup': 'maybeAddOption'
		},

		changeOption: function( e ) {
			nfRadio.channel( 'list-repeater' ).trigger( 'change:option', e, this.model, this.dataModel );
		},

		deleteOption: function( e ) {
			nfRadio.channel( 'list-repeater' ).trigger( 'click:deleteOption', this.model, this.collection, this.dataModel );
		},

		maybeAddOption: function( e ) {
			if ( 13 == e.keyCode ) {
				nfRadio.channel( 'list-repeater' ).trigger( 'click:addOption', this.collection, this.dataModel );
			}
		}

	});

	return view;
} );