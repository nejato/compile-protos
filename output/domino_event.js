/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.domino_event = (function() {
    
        /**
         * Namespace domino_event.
         * @exports domino_event
         * @namespace
         */
        var domino_event = {};
    
        /**
         * State enum.
         * @name domino_event.State
         * @enum {string}
         * @property {number} Pending=0 Pending value
         * @property {number} Countdown=1 Countdown value
         * @property {number} DealTime=2 DealTime value
         * @property {number} ShowdownTime=3 ShowdownTime value
         * @property {number} PlayerTurn=4 PlayerTurn value
         * @property {number} PrePlayerTurn=5 PrePlayerTurn value
         */
        domino_event.State = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Pending"] = 0;
            values[valuesById[1] = "Countdown"] = 1;
            values[valuesById[2] = "DealTime"] = 2;
            values[valuesById[3] = "ShowdownTime"] = 3;
            values[valuesById[4] = "PlayerTurn"] = 4;
            values[valuesById[5] = "PrePlayerTurn"] = 5;
            return values;
        })();
    
        /**
         * EndType enum.
         * @name domino_event.EndType
         * @enum {string}
         * @property {number} None=0 None value
         * @property {number} NormalEnd=1 NormalEnd value
         * @property {number} DeadEnd=2 DeadEnd value
         */
        domino_event.EndType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "None"] = 0;
            values[valuesById[1] = "NormalEnd"] = 1;
            values[valuesById[2] = "DeadEnd"] = 2;
            return values;
        })();
    
        domino_event.Response = (function() {
    
            /**
             * Properties of a Response.
             * @memberof domino_event
             * @interface IResponse
             * @property {domino_event.IResponseRoomState|null} [roomState] Response roomState
             * @property {domino_event.IResponseDeal|null} [deal] Response deal
             * @property {domino_event.IResponseFinishGame|null} [finish] Response finish
             * @property {domino_event.IResponseError|null} [error] Response error
             * @property {domino_event.IResponseCountdown|null} [countdown] Response countdown
             * @property {domino_event.IResponsePlayerTurn|null} [playerTurn] Response playerTurn
             * @property {domino_event.IResponsePlayerPlay|null} [playerPlay] Response playerPlay
             * @property {domino_event.IResponseStartCheat|null} [startCheat] Response startCheat
             */
    
            /**
             * Constructs a new Response.
             * @memberof domino_event
             * @classdesc Represents a Response.
             * @implements IResponse
             * @constructor
             * @param {domino_event.IResponse=} [properties] Properties to set
             */
            function Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Response roomState.
             * @member {domino_event.IResponseRoomState|null|undefined} roomState
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.roomState = null;
    
            /**
             * Response deal.
             * @member {domino_event.IResponseDeal|null|undefined} deal
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.deal = null;
    
            /**
             * Response finish.
             * @member {domino_event.IResponseFinishGame|null|undefined} finish
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.finish = null;
    
            /**
             * Response error.
             * @member {domino_event.IResponseError|null|undefined} error
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.error = null;
    
            /**
             * Response countdown.
             * @member {domino_event.IResponseCountdown|null|undefined} countdown
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.countdown = null;
    
            /**
             * Response playerTurn.
             * @member {domino_event.IResponsePlayerTurn|null|undefined} playerTurn
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.playerTurn = null;
    
            /**
             * Response playerPlay.
             * @member {domino_event.IResponsePlayerPlay|null|undefined} playerPlay
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.playerPlay = null;
    
            /**
             * Response startCheat.
             * @member {domino_event.IResponseStartCheat|null|undefined} startCheat
             * @memberof domino_event.Response
             * @instance
             */
            Response.prototype.startCheat = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Response message.
             * @member {"roomState"|"deal"|"finish"|"error"|"countdown"|"playerTurn"|"playerPlay"|"startCheat"|undefined} message
             * @memberof domino_event.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "message", {
                get: $util.oneOfGetter($oneOfFields = ["roomState", "deal", "finish", "error", "countdown", "playerTurn", "playerPlay", "startCheat"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof domino_event.Response
             * @static
             * @param {domino_event.IResponse=} [properties] Properties to set
             * @returns {domino_event.Response} Response instance
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };
    
            /**
             * Encodes the specified Response message. Does not implicitly {@link domino_event.Response.verify|verify} messages.
             * @function encode
             * @memberof domino_event.Response
             * @static
             * @param {domino_event.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomState != null && message.hasOwnProperty("roomState"))
                    $root.domino_event.ResponseRoomState.encode(message.roomState, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.deal != null && message.hasOwnProperty("deal"))
                    $root.domino_event.ResponseDeal.encode(message.deal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.finish != null && message.hasOwnProperty("finish"))
                    $root.domino_event.ResponseFinishGame.encode(message.finish, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.domino_event.ResponseError.encode(message.error, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.countdown != null && message.hasOwnProperty("countdown"))
                    $root.domino_event.ResponseCountdown.encode(message.countdown, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.playerTurn != null && message.hasOwnProperty("playerTurn"))
                    $root.domino_event.ResponsePlayerTurn.encode(message.playerTurn, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.playerPlay != null && message.hasOwnProperty("playerPlay"))
                    $root.domino_event.ResponsePlayerPlay.encode(message.playerPlay, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.startCheat != null && message.hasOwnProperty("startCheat"))
                    $root.domino_event.ResponseStartCheat.encode(message.startCheat, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link domino_event.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.Response
             * @static
             * @param {domino_event.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomState = $root.domino_event.ResponseRoomState.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.deal = $root.domino_event.ResponseDeal.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.finish = $root.domino_event.ResponseFinishGame.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.error = $root.domino_event.ResponseError.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.countdown = $root.domino_event.ResponseCountdown.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.playerTurn = $root.domino_event.ResponsePlayerTurn.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.playerPlay = $root.domino_event.ResponsePlayerPlay.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.startCheat = $root.domino_event.ResponseStartCheat.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Response message.
             * @function verify
             * @memberof domino_event.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.roomState != null && message.hasOwnProperty("roomState")) {
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponseRoomState.verify(message.roomState);
                        if (error)
                            return "roomState." + error;
                    }
                }
                if (message.deal != null && message.hasOwnProperty("deal")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponseDeal.verify(message.deal);
                        if (error)
                            return "deal." + error;
                    }
                }
                if (message.finish != null && message.hasOwnProperty("finish")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponseFinishGame.verify(message.finish);
                        if (error)
                            return "finish." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponseError.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.countdown != null && message.hasOwnProperty("countdown")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponseCountdown.verify(message.countdown);
                        if (error)
                            return "countdown." + error;
                    }
                }
                if (message.playerTurn != null && message.hasOwnProperty("playerTurn")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponsePlayerTurn.verify(message.playerTurn);
                        if (error)
                            return "playerTurn." + error;
                    }
                }
                if (message.playerPlay != null && message.hasOwnProperty("playerPlay")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponsePlayerPlay.verify(message.playerPlay);
                        if (error)
                            return "playerPlay." + error;
                    }
                }
                if (message.startCheat != null && message.hasOwnProperty("startCheat")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.ResponseStartCheat.verify(message.startCheat);
                        if (error)
                            return "startCheat." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.Response} Response
             */
            Response.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.Response)
                    return object;
                var message = new $root.domino_event.Response();
                if (object.roomState != null) {
                    if (typeof object.roomState !== "object")
                        throw TypeError(".domino_event.Response.roomState: object expected");
                    message.roomState = $root.domino_event.ResponseRoomState.fromObject(object.roomState);
                }
                if (object.deal != null) {
                    if (typeof object.deal !== "object")
                        throw TypeError(".domino_event.Response.deal: object expected");
                    message.deal = $root.domino_event.ResponseDeal.fromObject(object.deal);
                }
                if (object.finish != null) {
                    if (typeof object.finish !== "object")
                        throw TypeError(".domino_event.Response.finish: object expected");
                    message.finish = $root.domino_event.ResponseFinishGame.fromObject(object.finish);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".domino_event.Response.error: object expected");
                    message.error = $root.domino_event.ResponseError.fromObject(object.error);
                }
                if (object.countdown != null) {
                    if (typeof object.countdown !== "object")
                        throw TypeError(".domino_event.Response.countdown: object expected");
                    message.countdown = $root.domino_event.ResponseCountdown.fromObject(object.countdown);
                }
                if (object.playerTurn != null) {
                    if (typeof object.playerTurn !== "object")
                        throw TypeError(".domino_event.Response.playerTurn: object expected");
                    message.playerTurn = $root.domino_event.ResponsePlayerTurn.fromObject(object.playerTurn);
                }
                if (object.playerPlay != null) {
                    if (typeof object.playerPlay !== "object")
                        throw TypeError(".domino_event.Response.playerPlay: object expected");
                    message.playerPlay = $root.domino_event.ResponsePlayerPlay.fromObject(object.playerPlay);
                }
                if (object.startCheat != null) {
                    if (typeof object.startCheat !== "object")
                        throw TypeError(".domino_event.Response.startCheat: object expected");
                    message.startCheat = $root.domino_event.ResponseStartCheat.fromObject(object.startCheat);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.Response
             * @static
             * @param {domino_event.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.roomState != null && message.hasOwnProperty("roomState")) {
                    object.roomState = $root.domino_event.ResponseRoomState.toObject(message.roomState, options);
                    if (options.oneofs)
                        object.message = "roomState";
                }
                if (message.deal != null && message.hasOwnProperty("deal")) {
                    object.deal = $root.domino_event.ResponseDeal.toObject(message.deal, options);
                    if (options.oneofs)
                        object.message = "deal";
                }
                if (message.finish != null && message.hasOwnProperty("finish")) {
                    object.finish = $root.domino_event.ResponseFinishGame.toObject(message.finish, options);
                    if (options.oneofs)
                        object.message = "finish";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.domino_event.ResponseError.toObject(message.error, options);
                    if (options.oneofs)
                        object.message = "error";
                }
                if (message.countdown != null && message.hasOwnProperty("countdown")) {
                    object.countdown = $root.domino_event.ResponseCountdown.toObject(message.countdown, options);
                    if (options.oneofs)
                        object.message = "countdown";
                }
                if (message.playerTurn != null && message.hasOwnProperty("playerTurn")) {
                    object.playerTurn = $root.domino_event.ResponsePlayerTurn.toObject(message.playerTurn, options);
                    if (options.oneofs)
                        object.message = "playerTurn";
                }
                if (message.playerPlay != null && message.hasOwnProperty("playerPlay")) {
                    object.playerPlay = $root.domino_event.ResponsePlayerPlay.toObject(message.playerPlay, options);
                    if (options.oneofs)
                        object.message = "playerPlay";
                }
                if (message.startCheat != null && message.hasOwnProperty("startCheat")) {
                    object.startCheat = $root.domino_event.ResponseStartCheat.toObject(message.startCheat, options);
                    if (options.oneofs)
                        object.message = "startCheat";
                }
                return object;
            };
    
            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof domino_event.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Response;
        })();
    
        domino_event.Request = (function() {
    
            /**
             * Properties of a Request.
             * @memberof domino_event
             * @interface IRequest
             * @property {domino_event.IRequestPlay|null} [play] Request play
             * @property {domino_event.IRequestCheat|null} [cheat] Request cheat
             * @property {domino_event.IRequestStartCheat|null} [startCheat] Request startCheat
             */
    
            /**
             * Constructs a new Request.
             * @memberof domino_event
             * @classdesc Represents a Request.
             * @implements IRequest
             * @constructor
             * @param {domino_event.IRequest=} [properties] Properties to set
             */
            function Request(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Request play.
             * @member {domino_event.IRequestPlay|null|undefined} play
             * @memberof domino_event.Request
             * @instance
             */
            Request.prototype.play = null;
    
            /**
             * Request cheat.
             * @member {domino_event.IRequestCheat|null|undefined} cheat
             * @memberof domino_event.Request
             * @instance
             */
            Request.prototype.cheat = null;
    
            /**
             * Request startCheat.
             * @member {domino_event.IRequestStartCheat|null|undefined} startCheat
             * @memberof domino_event.Request
             * @instance
             */
            Request.prototype.startCheat = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Request message.
             * @member {"play"|"cheat"|"startCheat"|undefined} message
             * @memberof domino_event.Request
             * @instance
             */
            Object.defineProperty(Request.prototype, "message", {
                get: $util.oneOfGetter($oneOfFields = ["play", "cheat", "startCheat"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof domino_event.Request
             * @static
             * @param {domino_event.IRequest=} [properties] Properties to set
             * @returns {domino_event.Request} Request instance
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };
    
            /**
             * Encodes the specified Request message. Does not implicitly {@link domino_event.Request.verify|verify} messages.
             * @function encode
             * @memberof domino_event.Request
             * @static
             * @param {domino_event.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.play != null && message.hasOwnProperty("play"))
                    $root.domino_event.RequestPlay.encode(message.play, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.cheat != null && message.hasOwnProperty("cheat"))
                    $root.domino_event.RequestCheat.encode(message.cheat, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.startCheat != null && message.hasOwnProperty("startCheat"))
                    $root.domino_event.RequestStartCheat.encode(message.startCheat, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link domino_event.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.Request
             * @static
             * @param {domino_event.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.Request();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.play = $root.domino_event.RequestPlay.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.cheat = $root.domino_event.RequestCheat.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.startCheat = $root.domino_event.RequestStartCheat.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Request message.
             * @function verify
             * @memberof domino_event.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.play != null && message.hasOwnProperty("play")) {
                    properties.message = 1;
                    {
                        var error = $root.domino_event.RequestPlay.verify(message.play);
                        if (error)
                            return "play." + error;
                    }
                }
                if (message.cheat != null && message.hasOwnProperty("cheat")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.RequestCheat.verify(message.cheat);
                        if (error)
                            return "cheat." + error;
                    }
                }
                if (message.startCheat != null && message.hasOwnProperty("startCheat")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.domino_event.RequestStartCheat.verify(message.startCheat);
                        if (error)
                            return "startCheat." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.Request} Request
             */
            Request.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.Request)
                    return object;
                var message = new $root.domino_event.Request();
                if (object.play != null) {
                    if (typeof object.play !== "object")
                        throw TypeError(".domino_event.Request.play: object expected");
                    message.play = $root.domino_event.RequestPlay.fromObject(object.play);
                }
                if (object.cheat != null) {
                    if (typeof object.cheat !== "object")
                        throw TypeError(".domino_event.Request.cheat: object expected");
                    message.cheat = $root.domino_event.RequestCheat.fromObject(object.cheat);
                }
                if (object.startCheat != null) {
                    if (typeof object.startCheat !== "object")
                        throw TypeError(".domino_event.Request.startCheat: object expected");
                    message.startCheat = $root.domino_event.RequestStartCheat.fromObject(object.startCheat);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.Request
             * @static
             * @param {domino_event.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.play != null && message.hasOwnProperty("play")) {
                    object.play = $root.domino_event.RequestPlay.toObject(message.play, options);
                    if (options.oneofs)
                        object.message = "play";
                }
                if (message.cheat != null && message.hasOwnProperty("cheat")) {
                    object.cheat = $root.domino_event.RequestCheat.toObject(message.cheat, options);
                    if (options.oneofs)
                        object.message = "cheat";
                }
                if (message.startCheat != null && message.hasOwnProperty("startCheat")) {
                    object.startCheat = $root.domino_event.RequestStartCheat.toObject(message.startCheat, options);
                    if (options.oneofs)
                        object.message = "startCheat";
                }
                return object;
            };
    
            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof domino_event.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Request;
        })();
    
        domino_event.ResponseError = (function() {
    
            /**
             * Properties of a ResponseError.
             * @memberof domino_event
             * @interface IResponseError
             * @property {number|null} [code] ResponseError code
             * @property {number|null} [tag] ResponseError tag
             */
    
            /**
             * Constructs a new ResponseError.
             * @memberof domino_event
             * @classdesc Represents a ResponseError.
             * @implements IResponseError
             * @constructor
             * @param {domino_event.IResponseError=} [properties] Properties to set
             */
            function ResponseError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseError code.
             * @member {number} code
             * @memberof domino_event.ResponseError
             * @instance
             */
            ResponseError.prototype.code = 0;
    
            /**
             * ResponseError tag.
             * @member {number} tag
             * @memberof domino_event.ResponseError
             * @instance
             */
            ResponseError.prototype.tag = 0;
    
            /**
             * Creates a new ResponseError instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponseError
             * @static
             * @param {domino_event.IResponseError=} [properties] Properties to set
             * @returns {domino_event.ResponseError} ResponseError instance
             */
            ResponseError.create = function create(properties) {
                return new ResponseError(properties);
            };
    
            /**
             * Encodes the specified ResponseError message. Does not implicitly {@link domino_event.ResponseError.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponseError
             * @static
             * @param {domino_event.IResponseError} message ResponseError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.tag != null && message.hasOwnProperty("tag"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.tag);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseError message, length delimited. Does not implicitly {@link domino_event.ResponseError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponseError
             * @static
             * @param {domino_event.IResponseError} message ResponseError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseError message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponseError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponseError} ResponseError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponseError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.uint32();
                        break;
                    case 2:
                        message.tag = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponseError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponseError} ResponseError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseError message.
             * @function verify
             * @memberof domino_event.ResponseError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.tag != null && message.hasOwnProperty("tag"))
                    if (!$util.isInteger(message.tag))
                        return "tag: integer expected";
                return null;
            };
    
            /**
             * Creates a ResponseError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponseError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponseError} ResponseError
             */
            ResponseError.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponseError)
                    return object;
                var message = new $root.domino_event.ResponseError();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.tag != null)
                    message.tag = object.tag >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponseError
             * @static
             * @param {domino_event.ResponseError} message ResponseError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.tag = 0;
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.tag != null && message.hasOwnProperty("tag"))
                    object.tag = message.tag;
                return object;
            };
    
            /**
             * Converts this ResponseError to JSON.
             * @function toJSON
             * @memberof domino_event.ResponseError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseError;
        })();
    
        domino_event.Player = (function() {
    
            /**
             * Properties of a Player.
             * @memberof domino_event
             * @interface IPlayer
             * @property {number|null} [userId] Player userId
             * @property {string|null} [name] Player name
             * @property {number|Long|null} [chip] Player chip
             * @property {number|null} [avatar] Player avatar
             * @property {number|null} [seat] Player seat
             * @property {boolean|null} [disconnected] Player disconnected
             * @property {number|null} [state] Player state
             * @property {number|null} [numberOfCards] Player numberOfCards
             */
    
            /**
             * Constructs a new Player.
             * @memberof domino_event
             * @classdesc Represents a Player.
             * @implements IPlayer
             * @constructor
             * @param {domino_event.IPlayer=} [properties] Properties to set
             */
            function Player(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Player userId.
             * @member {number} userId
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.userId = 0;
    
            /**
             * Player name.
             * @member {string} name
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.name = "";
    
            /**
             * Player chip.
             * @member {number|Long} chip
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.chip = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Player avatar.
             * @member {number} avatar
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.avatar = 0;
    
            /**
             * Player seat.
             * @member {number} seat
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.seat = 0;
    
            /**
             * Player disconnected.
             * @member {boolean} disconnected
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.disconnected = false;
    
            /**
             * Player state.
             * @member {number} state
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.state = 0;
    
            /**
             * Player numberOfCards.
             * @member {number} numberOfCards
             * @memberof domino_event.Player
             * @instance
             */
            Player.prototype.numberOfCards = 0;
    
            /**
             * Creates a new Player instance using the specified properties.
             * @function create
             * @memberof domino_event.Player
             * @static
             * @param {domino_event.IPlayer=} [properties] Properties to set
             * @returns {domino_event.Player} Player instance
             */
            Player.create = function create(properties) {
                return new Player(properties);
            };
    
            /**
             * Encodes the specified Player message. Does not implicitly {@link domino_event.Player.verify|verify} messages.
             * @function encode
             * @memberof domino_event.Player
             * @static
             * @param {domino_event.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.chip != null && message.hasOwnProperty("chip"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.chip);
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.avatar);
                if (message.seat != null && message.hasOwnProperty("seat"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seat);
                if (message.disconnected != null && message.hasOwnProperty("disconnected"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.disconnected);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.state);
                if (message.numberOfCards != null && message.hasOwnProperty("numberOfCards"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.numberOfCards);
                return writer;
            };
    
            /**
             * Encodes the specified Player message, length delimited. Does not implicitly {@link domino_event.Player.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.Player
             * @static
             * @param {domino_event.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Player message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.Player();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.chip = reader.int64();
                        break;
                    case 4:
                        message.avatar = reader.int32();
                        break;
                    case 5:
                        message.seat = reader.int32();
                        break;
                    case 6:
                        message.disconnected = reader.bool();
                        break;
                    case 8:
                        message.state = reader.int32();
                        break;
                    case 9:
                        message.numberOfCards = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Player message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Player message.
             * @function verify
             * @memberof domino_event.Player
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Player.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.chip != null && message.hasOwnProperty("chip"))
                    if (!$util.isInteger(message.chip) && !(message.chip && $util.isInteger(message.chip.low) && $util.isInteger(message.chip.high)))
                        return "chip: integer|Long expected";
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    if (!$util.isInteger(message.avatar))
                        return "avatar: integer expected";
                if (message.seat != null && message.hasOwnProperty("seat"))
                    if (!$util.isInteger(message.seat))
                        return "seat: integer expected";
                if (message.disconnected != null && message.hasOwnProperty("disconnected"))
                    if (typeof message.disconnected !== "boolean")
                        return "disconnected: boolean expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    if (!$util.isInteger(message.state))
                        return "state: integer expected";
                if (message.numberOfCards != null && message.hasOwnProperty("numberOfCards"))
                    if (!$util.isInteger(message.numberOfCards))
                        return "numberOfCards: integer expected";
                return null;
            };
    
            /**
             * Creates a Player message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.Player
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.Player} Player
             */
            Player.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.Player)
                    return object;
                var message = new $root.domino_event.Player();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.chip != null)
                    if ($util.Long)
                        (message.chip = $util.Long.fromValue(object.chip)).unsigned = false;
                    else if (typeof object.chip === "string")
                        message.chip = parseInt(object.chip, 10);
                    else if (typeof object.chip === "number")
                        message.chip = object.chip;
                    else if (typeof object.chip === "object")
                        message.chip = new $util.LongBits(object.chip.low >>> 0, object.chip.high >>> 0).toNumber();
                if (object.avatar != null)
                    message.avatar = object.avatar | 0;
                if (object.seat != null)
                    message.seat = object.seat | 0;
                if (object.disconnected != null)
                    message.disconnected = Boolean(object.disconnected);
                if (object.state != null)
                    message.state = object.state | 0;
                if (object.numberOfCards != null)
                    message.numberOfCards = object.numberOfCards | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Player message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.Player
             * @static
             * @param {domino_event.Player} message Player
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Player.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.chip = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.chip = options.longs === String ? "0" : 0;
                    object.avatar = 0;
                    object.seat = 0;
                    object.disconnected = false;
                    object.state = 0;
                    object.numberOfCards = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.chip != null && message.hasOwnProperty("chip"))
                    if (typeof message.chip === "number")
                        object.chip = options.longs === String ? String(message.chip) : message.chip;
                    else
                        object.chip = options.longs === String ? $util.Long.prototype.toString.call(message.chip) : options.longs === Number ? new $util.LongBits(message.chip.low >>> 0, message.chip.high >>> 0).toNumber() : message.chip;
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    object.avatar = message.avatar;
                if (message.seat != null && message.hasOwnProperty("seat"))
                    object.seat = message.seat;
                if (message.disconnected != null && message.hasOwnProperty("disconnected"))
                    object.disconnected = message.disconnected;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = message.state;
                if (message.numberOfCards != null && message.hasOwnProperty("numberOfCards"))
                    object.numberOfCards = message.numberOfCards;
                return object;
            };
    
            /**
             * Converts this Player to JSON.
             * @function toJSON
             * @memberof domino_event.Player
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Player.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Player;
        })();
    
        domino_event.ResponseRoomState = (function() {
    
            /**
             * Properties of a ResponseRoomState.
             * @memberof domino_event
             * @interface IResponseRoomState
             * @property {domino_event.State|null} [state] ResponseRoomState state
             * @property {number|null} [countDownMillis] ResponseRoomState countDownMillis
             * @property {number|null} [stateStartTime] ResponseRoomState stateStartTime
             * @property {number|Long|null} [bet] ResponseRoomState bet
             * @property {Array.<domino_event.IPlayer>|null} [players] ResponseRoomState players
             * @property {boolean|null} [isRegisteredLeave] ResponseRoomState isRegisteredLeave
             * @property {Array.<number>|null} [cards] ResponseRoomState cards
             * @property {Array.<number>|null} [tableCards] ResponseRoomState tableCards
             * @property {number|null} [currentPlayerId] ResponseRoomState currentPlayerId
             * @property {number|null} [lastWinnerId] ResponseRoomState lastWinnerId
             * @property {number|null} [lastCard] ResponseRoomState lastCard
             */
    
            /**
             * Constructs a new ResponseRoomState.
             * @memberof domino_event
             * @classdesc Represents a ResponseRoomState.
             * @implements IResponseRoomState
             * @constructor
             * @param {domino_event.IResponseRoomState=} [properties] Properties to set
             */
            function ResponseRoomState(properties) {
                this.players = [];
                this.cards = [];
                this.tableCards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseRoomState state.
             * @member {domino_event.State} state
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.state = 0;
    
            /**
             * ResponseRoomState countDownMillis.
             * @member {number} countDownMillis
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.countDownMillis = 0;
    
            /**
             * ResponseRoomState stateStartTime.
             * @member {number} stateStartTime
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.stateStartTime = 0;
    
            /**
             * ResponseRoomState bet.
             * @member {number|Long} bet
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ResponseRoomState players.
             * @member {Array.<domino_event.IPlayer>} players
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.players = $util.emptyArray;
    
            /**
             * ResponseRoomState isRegisteredLeave.
             * @member {boolean} isRegisteredLeave
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.isRegisteredLeave = false;
    
            /**
             * ResponseRoomState cards.
             * @member {Array.<number>} cards
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.cards = $util.emptyArray;
    
            /**
             * ResponseRoomState tableCards.
             * @member {Array.<number>} tableCards
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.tableCards = $util.emptyArray;
    
            /**
             * ResponseRoomState currentPlayerId.
             * @member {number} currentPlayerId
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.currentPlayerId = 0;
    
            /**
             * ResponseRoomState lastWinnerId.
             * @member {number} lastWinnerId
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.lastWinnerId = 0;
    
            /**
             * ResponseRoomState lastCard.
             * @member {number} lastCard
             * @memberof domino_event.ResponseRoomState
             * @instance
             */
            ResponseRoomState.prototype.lastCard = 0;
    
            /**
             * Creates a new ResponseRoomState instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {domino_event.IResponseRoomState=} [properties] Properties to set
             * @returns {domino_event.ResponseRoomState} ResponseRoomState instance
             */
            ResponseRoomState.create = function create(properties) {
                return new ResponseRoomState(properties);
            };
    
            /**
             * Encodes the specified ResponseRoomState message. Does not implicitly {@link domino_event.ResponseRoomState.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {domino_event.IResponseRoomState} message ResponseRoomState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRoomState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                if (message.countDownMillis != null && message.hasOwnProperty("countDownMillis"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.countDownMillis);
                if (message.stateStartTime != null && message.hasOwnProperty("stateStartTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stateStartTime);
                if (message.bet != null && message.hasOwnProperty("bet"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.bet);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.domino_event.Player.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.isRegisteredLeave != null && message.hasOwnProperty("isRegisteredLeave"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isRegisteredLeave);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 7, wireType 2 =*/58).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                if (message.tableCards != null && message.tableCards.length) {
                    writer.uint32(/* id 8, wireType 2 =*/66).fork();
                    for (var i = 0; i < message.tableCards.length; ++i)
                        writer.int32(message.tableCards[i]);
                    writer.ldelim();
                }
                if (message.currentPlayerId != null && message.hasOwnProperty("currentPlayerId"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.currentPlayerId);
                if (message.lastWinnerId != null && message.hasOwnProperty("lastWinnerId"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.lastWinnerId);
                if (message.lastCard != null && message.hasOwnProperty("lastCard"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.lastCard);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseRoomState message, length delimited. Does not implicitly {@link domino_event.ResponseRoomState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {domino_event.IResponseRoomState} message ResponseRoomState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRoomState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseRoomState message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponseRoomState} ResponseRoomState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRoomState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponseRoomState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.state = reader.int32();
                        break;
                    case 2:
                        message.countDownMillis = reader.int32();
                        break;
                    case 3:
                        message.stateStartTime = reader.int32();
                        break;
                    case 4:
                        message.bet = reader.int64();
                        break;
                    case 5:
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.domino_event.Player.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.isRegisteredLeave = reader.bool();
                        break;
                    case 7:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    case 8:
                        if (!(message.tableCards && message.tableCards.length))
                            message.tableCards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.tableCards.push(reader.int32());
                        } else
                            message.tableCards.push(reader.int32());
                        break;
                    case 9:
                        message.currentPlayerId = reader.int32();
                        break;
                    case 10:
                        message.lastWinnerId = reader.int32();
                        break;
                    case 11:
                        message.lastCard = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseRoomState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponseRoomState} ResponseRoomState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRoomState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseRoomState message.
             * @function verify
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseRoomState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    switch (message.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.countDownMillis != null && message.hasOwnProperty("countDownMillis"))
                    if (!$util.isInteger(message.countDownMillis))
                        return "countDownMillis: integer expected";
                if (message.stateStartTime != null && message.hasOwnProperty("stateStartTime"))
                    if (!$util.isInteger(message.stateStartTime))
                        return "stateStartTime: integer expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.domino_event.Player.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.isRegisteredLeave != null && message.hasOwnProperty("isRegisteredLeave"))
                    if (typeof message.isRegisteredLeave !== "boolean")
                        return "isRegisteredLeave: boolean expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.tableCards != null && message.hasOwnProperty("tableCards")) {
                    if (!Array.isArray(message.tableCards))
                        return "tableCards: array expected";
                    for (var i = 0; i < message.tableCards.length; ++i)
                        if (!$util.isInteger(message.tableCards[i]))
                            return "tableCards: integer[] expected";
                }
                if (message.currentPlayerId != null && message.hasOwnProperty("currentPlayerId"))
                    if (!$util.isInteger(message.currentPlayerId))
                        return "currentPlayerId: integer expected";
                if (message.lastWinnerId != null && message.hasOwnProperty("lastWinnerId"))
                    if (!$util.isInteger(message.lastWinnerId))
                        return "lastWinnerId: integer expected";
                if (message.lastCard != null && message.hasOwnProperty("lastCard"))
                    if (!$util.isInteger(message.lastCard))
                        return "lastCard: integer expected";
                return null;
            };
    
            /**
             * Creates a ResponseRoomState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponseRoomState} ResponseRoomState
             */
            ResponseRoomState.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponseRoomState)
                    return object;
                var message = new $root.domino_event.ResponseRoomState();
                switch (object.state) {
                case "Pending":
                case 0:
                    message.state = 0;
                    break;
                case "Countdown":
                case 1:
                    message.state = 1;
                    break;
                case "DealTime":
                case 2:
                    message.state = 2;
                    break;
                case "ShowdownTime":
                case 3:
                    message.state = 3;
                    break;
                case "PlayerTurn":
                case 4:
                    message.state = 4;
                    break;
                case "PrePlayerTurn":
                case 5:
                    message.state = 5;
                    break;
                }
                if (object.countDownMillis != null)
                    message.countDownMillis = object.countDownMillis | 0;
                if (object.stateStartTime != null)
                    message.stateStartTime = object.stateStartTime | 0;
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".domino_event.ResponseRoomState.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".domino_event.ResponseRoomState.players: object expected");
                        message.players[i] = $root.domino_event.Player.fromObject(object.players[i]);
                    }
                }
                if (object.isRegisteredLeave != null)
                    message.isRegisteredLeave = Boolean(object.isRegisteredLeave);
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".domino_event.ResponseRoomState.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                if (object.tableCards) {
                    if (!Array.isArray(object.tableCards))
                        throw TypeError(".domino_event.ResponseRoomState.tableCards: array expected");
                    message.tableCards = [];
                    for (var i = 0; i < object.tableCards.length; ++i)
                        message.tableCards[i] = object.tableCards[i] | 0;
                }
                if (object.currentPlayerId != null)
                    message.currentPlayerId = object.currentPlayerId | 0;
                if (object.lastWinnerId != null)
                    message.lastWinnerId = object.lastWinnerId | 0;
                if (object.lastCard != null)
                    message.lastCard = object.lastCard | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseRoomState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponseRoomState
             * @static
             * @param {domino_event.ResponseRoomState} message ResponseRoomState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseRoomState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.players = [];
                    object.cards = [];
                    object.tableCards = [];
                }
                if (options.defaults) {
                    object.state = options.enums === String ? "Pending" : 0;
                    object.countDownMillis = 0;
                    object.stateStartTime = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                    object.isRegisteredLeave = false;
                    object.currentPlayerId = 0;
                    object.lastWinnerId = 0;
                    object.lastCard = 0;
                }
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = options.enums === String ? $root.domino_event.State[message.state] : message.state;
                if (message.countDownMillis != null && message.hasOwnProperty("countDownMillis"))
                    object.countDownMillis = message.countDownMillis;
                if (message.stateStartTime != null && message.hasOwnProperty("stateStartTime"))
                    object.stateStartTime = message.stateStartTime;
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.domino_event.Player.toObject(message.players[j], options);
                }
                if (message.isRegisteredLeave != null && message.hasOwnProperty("isRegisteredLeave"))
                    object.isRegisteredLeave = message.isRegisteredLeave;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                if (message.tableCards && message.tableCards.length) {
                    object.tableCards = [];
                    for (var j = 0; j < message.tableCards.length; ++j)
                        object.tableCards[j] = message.tableCards[j];
                }
                if (message.currentPlayerId != null && message.hasOwnProperty("currentPlayerId"))
                    object.currentPlayerId = message.currentPlayerId;
                if (message.lastWinnerId != null && message.hasOwnProperty("lastWinnerId"))
                    object.lastWinnerId = message.lastWinnerId;
                if (message.lastCard != null && message.hasOwnProperty("lastCard"))
                    object.lastCard = message.lastCard;
                return object;
            };
    
            /**
             * Converts this ResponseRoomState to JSON.
             * @function toJSON
             * @memberof domino_event.ResponseRoomState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseRoomState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseRoomState;
        })();
    
        domino_event.ResponseCountdown = (function() {
    
            /**
             * Properties of a ResponseCountdown.
             * @memberof domino_event
             * @interface IResponseCountdown
             * @property {number|null} [seconds] ResponseCountdown seconds
             */
    
            /**
             * Constructs a new ResponseCountdown.
             * @memberof domino_event
             * @classdesc Represents a ResponseCountdown.
             * @implements IResponseCountdown
             * @constructor
             * @param {domino_event.IResponseCountdown=} [properties] Properties to set
             */
            function ResponseCountdown(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseCountdown seconds.
             * @member {number} seconds
             * @memberof domino_event.ResponseCountdown
             * @instance
             */
            ResponseCountdown.prototype.seconds = 0;
    
            /**
             * Creates a new ResponseCountdown instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {domino_event.IResponseCountdown=} [properties] Properties to set
             * @returns {domino_event.ResponseCountdown} ResponseCountdown instance
             */
            ResponseCountdown.create = function create(properties) {
                return new ResponseCountdown(properties);
            };
    
            /**
             * Encodes the specified ResponseCountdown message. Does not implicitly {@link domino_event.ResponseCountdown.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {domino_event.IResponseCountdown} message ResponseCountdown message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCountdown.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seconds);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseCountdown message, length delimited. Does not implicitly {@link domino_event.ResponseCountdown.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {domino_event.IResponseCountdown} message ResponseCountdown message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCountdown.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseCountdown message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponseCountdown} ResponseCountdown
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCountdown.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponseCountdown();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseCountdown message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponseCountdown} ResponseCountdown
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCountdown.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseCountdown message.
             * @function verify
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseCountdown.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds))
                        return "seconds: integer expected";
                return null;
            };
    
            /**
             * Creates a ResponseCountdown message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponseCountdown} ResponseCountdown
             */
            ResponseCountdown.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponseCountdown)
                    return object;
                var message = new $root.domino_event.ResponseCountdown();
                if (object.seconds != null)
                    message.seconds = object.seconds | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseCountdown message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponseCountdown
             * @static
             * @param {domino_event.ResponseCountdown} message ResponseCountdown
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseCountdown.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.seconds = 0;
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    object.seconds = message.seconds;
                return object;
            };
    
            /**
             * Converts this ResponseCountdown to JSON.
             * @function toJSON
             * @memberof domino_event.ResponseCountdown
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseCountdown.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseCountdown;
        })();
    
        domino_event.ResponseDeal = (function() {
    
            /**
             * Properties of a ResponseDeal.
             * @memberof domino_event
             * @interface IResponseDeal
             * @property {Array.<number>|null} [cards] ResponseDeal cards
             */
    
            /**
             * Constructs a new ResponseDeal.
             * @memberof domino_event
             * @classdesc Represents a ResponseDeal.
             * @implements IResponseDeal
             * @constructor
             * @param {domino_event.IResponseDeal=} [properties] Properties to set
             */
            function ResponseDeal(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseDeal cards.
             * @member {Array.<number>} cards
             * @memberof domino_event.ResponseDeal
             * @instance
             */
            ResponseDeal.prototype.cards = $util.emptyArray;
    
            /**
             * Creates a new ResponseDeal instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {domino_event.IResponseDeal=} [properties] Properties to set
             * @returns {domino_event.ResponseDeal} ResponseDeal instance
             */
            ResponseDeal.create = function create(properties) {
                return new ResponseDeal(properties);
            };
    
            /**
             * Encodes the specified ResponseDeal message. Does not implicitly {@link domino_event.ResponseDeal.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {domino_event.IResponseDeal} message ResponseDeal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseDeal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified ResponseDeal message, length delimited. Does not implicitly {@link domino_event.ResponseDeal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {domino_event.IResponseDeal} message ResponseDeal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseDeal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseDeal message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponseDeal} ResponseDeal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseDeal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponseDeal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseDeal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponseDeal} ResponseDeal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseDeal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseDeal message.
             * @function verify
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseDeal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a ResponseDeal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponseDeal} ResponseDeal
             */
            ResponseDeal.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponseDeal)
                    return object;
                var message = new $root.domino_event.ResponseDeal();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".domino_event.ResponseDeal.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseDeal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponseDeal
             * @static
             * @param {domino_event.ResponseDeal} message ResponseDeal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseDeal.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                return object;
            };
    
            /**
             * Converts this ResponseDeal to JSON.
             * @function toJSON
             * @memberof domino_event.ResponseDeal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseDeal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseDeal;
        })();
    
        domino_event.UpdateChip = (function() {
    
            /**
             * Properties of an UpdateChip.
             * @memberof domino_event
             * @interface IUpdateChip
             * @property {number|null} [userId] UpdateChip userId
             * @property {number|Long|null} [amount] UpdateChip amount
             * @property {number|Long|null} [userMoney] UpdateChip userMoney
             */
    
            /**
             * Constructs a new UpdateChip.
             * @memberof domino_event
             * @classdesc Represents an UpdateChip.
             * @implements IUpdateChip
             * @constructor
             * @param {domino_event.IUpdateChip=} [properties] Properties to set
             */
            function UpdateChip(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UpdateChip userId.
             * @member {number} userId
             * @memberof domino_event.UpdateChip
             * @instance
             */
            UpdateChip.prototype.userId = 0;
    
            /**
             * UpdateChip amount.
             * @member {number|Long} amount
             * @memberof domino_event.UpdateChip
             * @instance
             */
            UpdateChip.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * UpdateChip userMoney.
             * @member {number|Long} userMoney
             * @memberof domino_event.UpdateChip
             * @instance
             */
            UpdateChip.prototype.userMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new UpdateChip instance using the specified properties.
             * @function create
             * @memberof domino_event.UpdateChip
             * @static
             * @param {domino_event.IUpdateChip=} [properties] Properties to set
             * @returns {domino_event.UpdateChip} UpdateChip instance
             */
            UpdateChip.create = function create(properties) {
                return new UpdateChip(properties);
            };
    
            /**
             * Encodes the specified UpdateChip message. Does not implicitly {@link domino_event.UpdateChip.verify|verify} messages.
             * @function encode
             * @memberof domino_event.UpdateChip
             * @static
             * @param {domino_event.IUpdateChip} message UpdateChip message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateChip.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.amount != null && message.hasOwnProperty("amount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
                if (message.userMoney != null && message.hasOwnProperty("userMoney"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userMoney);
                return writer;
            };
    
            /**
             * Encodes the specified UpdateChip message, length delimited. Does not implicitly {@link domino_event.UpdateChip.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.UpdateChip
             * @static
             * @param {domino_event.IUpdateChip} message UpdateChip message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateChip.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateChip message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.UpdateChip
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.UpdateChip} UpdateChip
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateChip.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.UpdateChip();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int32();
                        break;
                    case 2:
                        message.amount = reader.int64();
                        break;
                    case 3:
                        message.userMoney = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UpdateChip message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.UpdateChip
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.UpdateChip} UpdateChip
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateChip.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateChip message.
             * @function verify
             * @memberof domino_event.UpdateChip
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateChip.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                        return "amount: integer|Long expected";
                if (message.userMoney != null && message.hasOwnProperty("userMoney"))
                    if (!$util.isInteger(message.userMoney) && !(message.userMoney && $util.isInteger(message.userMoney.low) && $util.isInteger(message.userMoney.high)))
                        return "userMoney: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an UpdateChip message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.UpdateChip
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.UpdateChip} UpdateChip
             */
            UpdateChip.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.UpdateChip)
                    return object;
                var message = new $root.domino_event.UpdateChip();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.amount != null)
                    if ($util.Long)
                        (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                    else if (typeof object.amount === "string")
                        message.amount = parseInt(object.amount, 10);
                    else if (typeof object.amount === "number")
                        message.amount = object.amount;
                    else if (typeof object.amount === "object")
                        message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
                if (object.userMoney != null)
                    if ($util.Long)
                        (message.userMoney = $util.Long.fromValue(object.userMoney)).unsigned = false;
                    else if (typeof object.userMoney === "string")
                        message.userMoney = parseInt(object.userMoney, 10);
                    else if (typeof object.userMoney === "number")
                        message.userMoney = object.userMoney;
                    else if (typeof object.userMoney === "object")
                        message.userMoney = new $util.LongBits(object.userMoney.low >>> 0, object.userMoney.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from an UpdateChip message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.UpdateChip
             * @static
             * @param {domino_event.UpdateChip} message UpdateChip
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateChip.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.amount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userMoney = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (typeof message.amount === "number")
                        object.amount = options.longs === String ? String(message.amount) : message.amount;
                    else
                        object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
                if (message.userMoney != null && message.hasOwnProperty("userMoney"))
                    if (typeof message.userMoney === "number")
                        object.userMoney = options.longs === String ? String(message.userMoney) : message.userMoney;
                    else
                        object.userMoney = options.longs === String ? $util.Long.prototype.toString.call(message.userMoney) : options.longs === Number ? new $util.LongBits(message.userMoney.low >>> 0, message.userMoney.high >>> 0).toNumber() : message.userMoney;
                return object;
            };
    
            /**
             * Converts this UpdateChip to JSON.
             * @function toJSON
             * @memberof domino_event.UpdateChip
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateChip.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UpdateChip;
        })();
    
        domino_event.ResponsePlayerTurn = (function() {
    
            /**
             * Properties of a ResponsePlayerTurn.
             * @memberof domino_event
             * @interface IResponsePlayerTurn
             * @property {number|null} [seconds] ResponsePlayerTurn seconds
             * @property {number|null} [userId] ResponsePlayerTurn userId
             * @property {Array.<domino_event.IUpdateChip>|null} [updateChip] ResponsePlayerTurn updateChip
             * @property {boolean|null} [isFinish] ResponsePlayerTurn isFinish
             */
    
            /**
             * Constructs a new ResponsePlayerTurn.
             * @memberof domino_event
             * @classdesc Represents a ResponsePlayerTurn.
             * @implements IResponsePlayerTurn
             * @constructor
             * @param {domino_event.IResponsePlayerTurn=} [properties] Properties to set
             */
            function ResponsePlayerTurn(properties) {
                this.updateChip = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponsePlayerTurn seconds.
             * @member {number} seconds
             * @memberof domino_event.ResponsePlayerTurn
             * @instance
             */
            ResponsePlayerTurn.prototype.seconds = 0;
    
            /**
             * ResponsePlayerTurn userId.
             * @member {number} userId
             * @memberof domino_event.ResponsePlayerTurn
             * @instance
             */
            ResponsePlayerTurn.prototype.userId = 0;
    
            /**
             * ResponsePlayerTurn updateChip.
             * @member {Array.<domino_event.IUpdateChip>} updateChip
             * @memberof domino_event.ResponsePlayerTurn
             * @instance
             */
            ResponsePlayerTurn.prototype.updateChip = $util.emptyArray;
    
            /**
             * ResponsePlayerTurn isFinish.
             * @member {boolean} isFinish
             * @memberof domino_event.ResponsePlayerTurn
             * @instance
             */
            ResponsePlayerTurn.prototype.isFinish = false;
    
            /**
             * Creates a new ResponsePlayerTurn instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {domino_event.IResponsePlayerTurn=} [properties] Properties to set
             * @returns {domino_event.ResponsePlayerTurn} ResponsePlayerTurn instance
             */
            ResponsePlayerTurn.create = function create(properties) {
                return new ResponsePlayerTurn(properties);
            };
    
            /**
             * Encodes the specified ResponsePlayerTurn message. Does not implicitly {@link domino_event.ResponsePlayerTurn.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {domino_event.IResponsePlayerTurn} message ResponsePlayerTurn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePlayerTurn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seconds);
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
                if (message.updateChip != null && message.updateChip.length)
                    for (var i = 0; i < message.updateChip.length; ++i)
                        $root.domino_event.UpdateChip.encode(message.updateChip[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.isFinish != null && message.hasOwnProperty("isFinish"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isFinish);
                return writer;
            };
    
            /**
             * Encodes the specified ResponsePlayerTurn message, length delimited. Does not implicitly {@link domino_event.ResponsePlayerTurn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {domino_event.IResponsePlayerTurn} message ResponsePlayerTurn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePlayerTurn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponsePlayerTurn message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponsePlayerTurn} ResponsePlayerTurn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePlayerTurn.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponsePlayerTurn();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int32();
                        break;
                    case 2:
                        message.userId = reader.int32();
                        break;
                    case 3:
                        if (!(message.updateChip && message.updateChip.length))
                            message.updateChip = [];
                        message.updateChip.push($root.domino_event.UpdateChip.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.isFinish = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponsePlayerTurn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponsePlayerTurn} ResponsePlayerTurn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePlayerTurn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponsePlayerTurn message.
             * @function verify
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponsePlayerTurn.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds))
                        return "seconds: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.updateChip != null && message.hasOwnProperty("updateChip")) {
                    if (!Array.isArray(message.updateChip))
                        return "updateChip: array expected";
                    for (var i = 0; i < message.updateChip.length; ++i) {
                        var error = $root.domino_event.UpdateChip.verify(message.updateChip[i]);
                        if (error)
                            return "updateChip." + error;
                    }
                }
                if (message.isFinish != null && message.hasOwnProperty("isFinish"))
                    if (typeof message.isFinish !== "boolean")
                        return "isFinish: boolean expected";
                return null;
            };
    
            /**
             * Creates a ResponsePlayerTurn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponsePlayerTurn} ResponsePlayerTurn
             */
            ResponsePlayerTurn.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponsePlayerTurn)
                    return object;
                var message = new $root.domino_event.ResponsePlayerTurn();
                if (object.seconds != null)
                    message.seconds = object.seconds | 0;
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.updateChip) {
                    if (!Array.isArray(object.updateChip))
                        throw TypeError(".domino_event.ResponsePlayerTurn.updateChip: array expected");
                    message.updateChip = [];
                    for (var i = 0; i < object.updateChip.length; ++i) {
                        if (typeof object.updateChip[i] !== "object")
                            throw TypeError(".domino_event.ResponsePlayerTurn.updateChip: object expected");
                        message.updateChip[i] = $root.domino_event.UpdateChip.fromObject(object.updateChip[i]);
                    }
                }
                if (object.isFinish != null)
                    message.isFinish = Boolean(object.isFinish);
                return message;
            };
    
            /**
             * Creates a plain object from a ResponsePlayerTurn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponsePlayerTurn
             * @static
             * @param {domino_event.ResponsePlayerTurn} message ResponsePlayerTurn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponsePlayerTurn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.updateChip = [];
                if (options.defaults) {
                    object.seconds = 0;
                    object.userId = 0;
                    object.isFinish = false;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    object.seconds = message.seconds;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.updateChip && message.updateChip.length) {
                    object.updateChip = [];
                    for (var j = 0; j < message.updateChip.length; ++j)
                        object.updateChip[j] = $root.domino_event.UpdateChip.toObject(message.updateChip[j], options);
                }
                if (message.isFinish != null && message.hasOwnProperty("isFinish"))
                    object.isFinish = message.isFinish;
                return object;
            };
    
            /**
             * Converts this ResponsePlayerTurn to JSON.
             * @function toJSON
             * @memberof domino_event.ResponsePlayerTurn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponsePlayerTurn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponsePlayerTurn;
        })();
    
        domino_event.RequestPlay = (function() {
    
            /**
             * Properties of a RequestPlay.
             * @memberof domino_event
             * @interface IRequestPlay
             * @property {number|null} [card] RequestPlay card
             * @property {boolean|null} [head] RequestPlay head
             */
    
            /**
             * Constructs a new RequestPlay.
             * @memberof domino_event
             * @classdesc Represents a RequestPlay.
             * @implements IRequestPlay
             * @constructor
             * @param {domino_event.IRequestPlay=} [properties] Properties to set
             */
            function RequestPlay(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestPlay card.
             * @member {number} card
             * @memberof domino_event.RequestPlay
             * @instance
             */
            RequestPlay.prototype.card = 0;
    
            /**
             * RequestPlay head.
             * @member {boolean} head
             * @memberof domino_event.RequestPlay
             * @instance
             */
            RequestPlay.prototype.head = false;
    
            /**
             * Creates a new RequestPlay instance using the specified properties.
             * @function create
             * @memberof domino_event.RequestPlay
             * @static
             * @param {domino_event.IRequestPlay=} [properties] Properties to set
             * @returns {domino_event.RequestPlay} RequestPlay instance
             */
            RequestPlay.create = function create(properties) {
                return new RequestPlay(properties);
            };
    
            /**
             * Encodes the specified RequestPlay message. Does not implicitly {@link domino_event.RequestPlay.verify|verify} messages.
             * @function encode
             * @memberof domino_event.RequestPlay
             * @static
             * @param {domino_event.IRequestPlay} message RequestPlay message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestPlay.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.card != null && message.hasOwnProperty("card"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.card);
                if (message.head != null && message.hasOwnProperty("head"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.head);
                return writer;
            };
    
            /**
             * Encodes the specified RequestPlay message, length delimited. Does not implicitly {@link domino_event.RequestPlay.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.RequestPlay
             * @static
             * @param {domino_event.IRequestPlay} message RequestPlay message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestPlay.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestPlay message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.RequestPlay
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.RequestPlay} RequestPlay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestPlay.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.RequestPlay();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.card = reader.int32();
                        break;
                    case 2:
                        message.head = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestPlay message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.RequestPlay
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.RequestPlay} RequestPlay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestPlay.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestPlay message.
             * @function verify
             * @memberof domino_event.RequestPlay
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestPlay.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.card != null && message.hasOwnProperty("card"))
                    if (!$util.isInteger(message.card))
                        return "card: integer expected";
                if (message.head != null && message.hasOwnProperty("head"))
                    if (typeof message.head !== "boolean")
                        return "head: boolean expected";
                return null;
            };
    
            /**
             * Creates a RequestPlay message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.RequestPlay
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.RequestPlay} RequestPlay
             */
            RequestPlay.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.RequestPlay)
                    return object;
                var message = new $root.domino_event.RequestPlay();
                if (object.card != null)
                    message.card = object.card | 0;
                if (object.head != null)
                    message.head = Boolean(object.head);
                return message;
            };
    
            /**
             * Creates a plain object from a RequestPlay message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.RequestPlay
             * @static
             * @param {domino_event.RequestPlay} message RequestPlay
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestPlay.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.card = 0;
                    object.head = false;
                }
                if (message.card != null && message.hasOwnProperty("card"))
                    object.card = message.card;
                if (message.head != null && message.hasOwnProperty("head"))
                    object.head = message.head;
                return object;
            };
    
            /**
             * Converts this RequestPlay to JSON.
             * @function toJSON
             * @memberof domino_event.RequestPlay
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestPlay.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestPlay;
        })();
    
        domino_event.ResponsePlayerPlay = (function() {
    
            /**
             * Properties of a ResponsePlayerPlay.
             * @memberof domino_event
             * @interface IResponsePlayerPlay
             * @property {number|null} [userId] ResponsePlayerPlay userId
             * @property {number|null} [card] ResponsePlayerPlay card
             * @property {boolean|null} [head] ResponsePlayerPlay head
             * @property {number|null} [numberOfCards] ResponsePlayerPlay numberOfCards
             */
    
            /**
             * Constructs a new ResponsePlayerPlay.
             * @memberof domino_event
             * @classdesc Represents a ResponsePlayerPlay.
             * @implements IResponsePlayerPlay
             * @constructor
             * @param {domino_event.IResponsePlayerPlay=} [properties] Properties to set
             */
            function ResponsePlayerPlay(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponsePlayerPlay userId.
             * @member {number} userId
             * @memberof domino_event.ResponsePlayerPlay
             * @instance
             */
            ResponsePlayerPlay.prototype.userId = 0;
    
            /**
             * ResponsePlayerPlay card.
             * @member {number} card
             * @memberof domino_event.ResponsePlayerPlay
             * @instance
             */
            ResponsePlayerPlay.prototype.card = 0;
    
            /**
             * ResponsePlayerPlay head.
             * @member {boolean} head
             * @memberof domino_event.ResponsePlayerPlay
             * @instance
             */
            ResponsePlayerPlay.prototype.head = false;
    
            /**
             * ResponsePlayerPlay numberOfCards.
             * @member {number} numberOfCards
             * @memberof domino_event.ResponsePlayerPlay
             * @instance
             */
            ResponsePlayerPlay.prototype.numberOfCards = 0;
    
            /**
             * Creates a new ResponsePlayerPlay instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {domino_event.IResponsePlayerPlay=} [properties] Properties to set
             * @returns {domino_event.ResponsePlayerPlay} ResponsePlayerPlay instance
             */
            ResponsePlayerPlay.create = function create(properties) {
                return new ResponsePlayerPlay(properties);
            };
    
            /**
             * Encodes the specified ResponsePlayerPlay message. Does not implicitly {@link domino_event.ResponsePlayerPlay.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {domino_event.IResponsePlayerPlay} message ResponsePlayerPlay message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePlayerPlay.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.card != null && message.hasOwnProperty("card"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.card);
                if (message.head != null && message.hasOwnProperty("head"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.head);
                if (message.numberOfCards != null && message.hasOwnProperty("numberOfCards"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.numberOfCards);
                return writer;
            };
    
            /**
             * Encodes the specified ResponsePlayerPlay message, length delimited. Does not implicitly {@link domino_event.ResponsePlayerPlay.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {domino_event.IResponsePlayerPlay} message ResponsePlayerPlay message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePlayerPlay.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponsePlayerPlay message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponsePlayerPlay} ResponsePlayerPlay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePlayerPlay.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponsePlayerPlay();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int32();
                        break;
                    case 2:
                        message.card = reader.int32();
                        break;
                    case 3:
                        message.head = reader.bool();
                        break;
                    case 4:
                        message.numberOfCards = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponsePlayerPlay message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponsePlayerPlay} ResponsePlayerPlay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePlayerPlay.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponsePlayerPlay message.
             * @function verify
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponsePlayerPlay.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.card != null && message.hasOwnProperty("card"))
                    if (!$util.isInteger(message.card))
                        return "card: integer expected";
                if (message.head != null && message.hasOwnProperty("head"))
                    if (typeof message.head !== "boolean")
                        return "head: boolean expected";
                if (message.numberOfCards != null && message.hasOwnProperty("numberOfCards"))
                    if (!$util.isInteger(message.numberOfCards))
                        return "numberOfCards: integer expected";
                return null;
            };
    
            /**
             * Creates a ResponsePlayerPlay message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponsePlayerPlay} ResponsePlayerPlay
             */
            ResponsePlayerPlay.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponsePlayerPlay)
                    return object;
                var message = new $root.domino_event.ResponsePlayerPlay();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.card != null)
                    message.card = object.card | 0;
                if (object.head != null)
                    message.head = Boolean(object.head);
                if (object.numberOfCards != null)
                    message.numberOfCards = object.numberOfCards | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponsePlayerPlay message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponsePlayerPlay
             * @static
             * @param {domino_event.ResponsePlayerPlay} message ResponsePlayerPlay
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponsePlayerPlay.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.card = 0;
                    object.head = false;
                    object.numberOfCards = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.card != null && message.hasOwnProperty("card"))
                    object.card = message.card;
                if (message.head != null && message.hasOwnProperty("head"))
                    object.head = message.head;
                if (message.numberOfCards != null && message.hasOwnProperty("numberOfCards"))
                    object.numberOfCards = message.numberOfCards;
                return object;
            };
    
            /**
             * Converts this ResponsePlayerPlay to JSON.
             * @function toJSON
             * @memberof domino_event.ResponsePlayerPlay
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponsePlayerPlay.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponsePlayerPlay;
        })();
    
        domino_event.PlayerFinishResult = (function() {
    
            /**
             * Properties of a PlayerFinishResult.
             * @memberof domino_event
             * @interface IPlayerFinishResult
             * @property {number|null} [userId] PlayerFinishResult userId
             * @property {number|Long|null} [amount] PlayerFinishResult amount
             * @property {number|Long|null} [userMoney] PlayerFinishResult userMoney
             * @property {Array.<number>|null} [cards] PlayerFinishResult cards
             */
    
            /**
             * Constructs a new PlayerFinishResult.
             * @memberof domino_event
             * @classdesc Represents a PlayerFinishResult.
             * @implements IPlayerFinishResult
             * @constructor
             * @param {domino_event.IPlayerFinishResult=} [properties] Properties to set
             */
            function PlayerFinishResult(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerFinishResult userId.
             * @member {number} userId
             * @memberof domino_event.PlayerFinishResult
             * @instance
             */
            PlayerFinishResult.prototype.userId = 0;
    
            /**
             * PlayerFinishResult amount.
             * @member {number|Long} amount
             * @memberof domino_event.PlayerFinishResult
             * @instance
             */
            PlayerFinishResult.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * PlayerFinishResult userMoney.
             * @member {number|Long} userMoney
             * @memberof domino_event.PlayerFinishResult
             * @instance
             */
            PlayerFinishResult.prototype.userMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * PlayerFinishResult cards.
             * @member {Array.<number>} cards
             * @memberof domino_event.PlayerFinishResult
             * @instance
             */
            PlayerFinishResult.prototype.cards = $util.emptyArray;
    
            /**
             * Creates a new PlayerFinishResult instance using the specified properties.
             * @function create
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {domino_event.IPlayerFinishResult=} [properties] Properties to set
             * @returns {domino_event.PlayerFinishResult} PlayerFinishResult instance
             */
            PlayerFinishResult.create = function create(properties) {
                return new PlayerFinishResult(properties);
            };
    
            /**
             * Encodes the specified PlayerFinishResult message. Does not implicitly {@link domino_event.PlayerFinishResult.verify|verify} messages.
             * @function encode
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {domino_event.IPlayerFinishResult} message PlayerFinishResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerFinishResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
                if (message.amount != null && message.hasOwnProperty("amount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
                if (message.userMoney != null && message.hasOwnProperty("userMoney"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userMoney);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified PlayerFinishResult message, length delimited. Does not implicitly {@link domino_event.PlayerFinishResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {domino_event.IPlayerFinishResult} message PlayerFinishResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerFinishResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlayerFinishResult message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.PlayerFinishResult} PlayerFinishResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerFinishResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.PlayerFinishResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int32();
                        break;
                    case 2:
                        message.amount = reader.int64();
                        break;
                    case 3:
                        message.userMoney = reader.int64();
                        break;
                    case 4:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PlayerFinishResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.PlayerFinishResult} PlayerFinishResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerFinishResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlayerFinishResult message.
             * @function verify
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerFinishResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                        return "amount: integer|Long expected";
                if (message.userMoney != null && message.hasOwnProperty("userMoney"))
                    if (!$util.isInteger(message.userMoney) && !(message.userMoney && $util.isInteger(message.userMoney.low) && $util.isInteger(message.userMoney.high)))
                        return "userMoney: integer|Long expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a PlayerFinishResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.PlayerFinishResult} PlayerFinishResult
             */
            PlayerFinishResult.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.PlayerFinishResult)
                    return object;
                var message = new $root.domino_event.PlayerFinishResult();
                if (object.userId != null)
                    message.userId = object.userId | 0;
                if (object.amount != null)
                    if ($util.Long)
                        (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                    else if (typeof object.amount === "string")
                        message.amount = parseInt(object.amount, 10);
                    else if (typeof object.amount === "number")
                        message.amount = object.amount;
                    else if (typeof object.amount === "object")
                        message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
                if (object.userMoney != null)
                    if ($util.Long)
                        (message.userMoney = $util.Long.fromValue(object.userMoney)).unsigned = false;
                    else if (typeof object.userMoney === "string")
                        message.userMoney = parseInt(object.userMoney, 10);
                    else if (typeof object.userMoney === "number")
                        message.userMoney = object.userMoney;
                    else if (typeof object.userMoney === "object")
                        message.userMoney = new $util.LongBits(object.userMoney.low >>> 0, object.userMoney.high >>> 0).toNumber();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".domino_event.PlayerFinishResult.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PlayerFinishResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.PlayerFinishResult
             * @static
             * @param {domino_event.PlayerFinishResult} message PlayerFinishResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerFinishResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults) {
                    object.userId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.amount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userMoney = options.longs === String ? "0" : 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (typeof message.amount === "number")
                        object.amount = options.longs === String ? String(message.amount) : message.amount;
                    else
                        object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
                if (message.userMoney != null && message.hasOwnProperty("userMoney"))
                    if (typeof message.userMoney === "number")
                        object.userMoney = options.longs === String ? String(message.userMoney) : message.userMoney;
                    else
                        object.userMoney = options.longs === String ? $util.Long.prototype.toString.call(message.userMoney) : options.longs === Number ? new $util.LongBits(message.userMoney.low >>> 0, message.userMoney.high >>> 0).toNumber() : message.userMoney;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                return object;
            };
    
            /**
             * Converts this PlayerFinishResult to JSON.
             * @function toJSON
             * @memberof domino_event.PlayerFinishResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerFinishResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PlayerFinishResult;
        })();
    
        domino_event.ResponseFinishGame = (function() {
    
            /**
             * Properties of a ResponseFinishGame.
             * @memberof domino_event
             * @interface IResponseFinishGame
             * @property {number|null} [winnerId] ResponseFinishGame winnerId
             * @property {number|null} [multiplier] ResponseFinishGame multiplier
             * @property {Array.<domino_event.IPlayerFinishResult>|null} [result] ResponseFinishGame result
             * @property {domino_event.EndType|null} [endType] ResponseFinishGame endType
             */
    
            /**
             * Constructs a new ResponseFinishGame.
             * @memberof domino_event
             * @classdesc Represents a ResponseFinishGame.
             * @implements IResponseFinishGame
             * @constructor
             * @param {domino_event.IResponseFinishGame=} [properties] Properties to set
             */
            function ResponseFinishGame(properties) {
                this.result = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseFinishGame winnerId.
             * @member {number} winnerId
             * @memberof domino_event.ResponseFinishGame
             * @instance
             */
            ResponseFinishGame.prototype.winnerId = 0;
    
            /**
             * ResponseFinishGame multiplier.
             * @member {number} multiplier
             * @memberof domino_event.ResponseFinishGame
             * @instance
             */
            ResponseFinishGame.prototype.multiplier = 0;
    
            /**
             * ResponseFinishGame result.
             * @member {Array.<domino_event.IPlayerFinishResult>} result
             * @memberof domino_event.ResponseFinishGame
             * @instance
             */
            ResponseFinishGame.prototype.result = $util.emptyArray;
    
            /**
             * ResponseFinishGame endType.
             * @member {domino_event.EndType} endType
             * @memberof domino_event.ResponseFinishGame
             * @instance
             */
            ResponseFinishGame.prototype.endType = 0;
    
            /**
             * Creates a new ResponseFinishGame instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {domino_event.IResponseFinishGame=} [properties] Properties to set
             * @returns {domino_event.ResponseFinishGame} ResponseFinishGame instance
             */
            ResponseFinishGame.create = function create(properties) {
                return new ResponseFinishGame(properties);
            };
    
            /**
             * Encodes the specified ResponseFinishGame message. Does not implicitly {@link domino_event.ResponseFinishGame.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {domino_event.IResponseFinishGame} message ResponseFinishGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseFinishGame.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.winnerId);
                if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.multiplier);
                if (message.result != null && message.result.length)
                    for (var i = 0; i < message.result.length; ++i)
                        $root.domino_event.PlayerFinishResult.encode(message.result[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.endType != null && message.hasOwnProperty("endType"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.endType);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseFinishGame message, length delimited. Does not implicitly {@link domino_event.ResponseFinishGame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {domino_event.IResponseFinishGame} message ResponseFinishGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseFinishGame.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseFinishGame message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponseFinishGame} ResponseFinishGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseFinishGame.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponseFinishGame();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.winnerId = reader.int32();
                        break;
                    case 2:
                        message.multiplier = reader.int32();
                        break;
                    case 3:
                        if (!(message.result && message.result.length))
                            message.result = [];
                        message.result.push($root.domino_event.PlayerFinishResult.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.endType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseFinishGame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponseFinishGame} ResponseFinishGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseFinishGame.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseFinishGame message.
             * @function verify
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseFinishGame.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    if (!$util.isInteger(message.winnerId))
                        return "winnerId: integer expected";
                if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                    if (!$util.isInteger(message.multiplier))
                        return "multiplier: integer expected";
                if (message.result != null && message.hasOwnProperty("result")) {
                    if (!Array.isArray(message.result))
                        return "result: array expected";
                    for (var i = 0; i < message.result.length; ++i) {
                        var error = $root.domino_event.PlayerFinishResult.verify(message.result[i]);
                        if (error)
                            return "result." + error;
                    }
                }
                if (message.endType != null && message.hasOwnProperty("endType"))
                    switch (message.endType) {
                    default:
                        return "endType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a ResponseFinishGame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponseFinishGame} ResponseFinishGame
             */
            ResponseFinishGame.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponseFinishGame)
                    return object;
                var message = new $root.domino_event.ResponseFinishGame();
                if (object.winnerId != null)
                    message.winnerId = object.winnerId | 0;
                if (object.multiplier != null)
                    message.multiplier = object.multiplier | 0;
                if (object.result) {
                    if (!Array.isArray(object.result))
                        throw TypeError(".domino_event.ResponseFinishGame.result: array expected");
                    message.result = [];
                    for (var i = 0; i < object.result.length; ++i) {
                        if (typeof object.result[i] !== "object")
                            throw TypeError(".domino_event.ResponseFinishGame.result: object expected");
                        message.result[i] = $root.domino_event.PlayerFinishResult.fromObject(object.result[i]);
                    }
                }
                switch (object.endType) {
                case "None":
                case 0:
                    message.endType = 0;
                    break;
                case "NormalEnd":
                case 1:
                    message.endType = 1;
                    break;
                case "DeadEnd":
                case 2:
                    message.endType = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseFinishGame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponseFinishGame
             * @static
             * @param {domino_event.ResponseFinishGame} message ResponseFinishGame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseFinishGame.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.result = [];
                if (options.defaults) {
                    object.winnerId = 0;
                    object.multiplier = 0;
                    object.endType = options.enums === String ? "None" : 0;
                }
                if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                    object.winnerId = message.winnerId;
                if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                    object.multiplier = message.multiplier;
                if (message.result && message.result.length) {
                    object.result = [];
                    for (var j = 0; j < message.result.length; ++j)
                        object.result[j] = $root.domino_event.PlayerFinishResult.toObject(message.result[j], options);
                }
                if (message.endType != null && message.hasOwnProperty("endType"))
                    object.endType = options.enums === String ? $root.domino_event.EndType[message.endType] : message.endType;
                return object;
            };
    
            /**
             * Converts this ResponseFinishGame to JSON.
             * @function toJSON
             * @memberof domino_event.ResponseFinishGame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseFinishGame.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseFinishGame;
        })();
    
        domino_event.RequestStartCheat = (function() {
    
            /**
             * Properties of a RequestStartCheat.
             * @memberof domino_event
             * @interface IRequestStartCheat
             */
    
            /**
             * Constructs a new RequestStartCheat.
             * @memberof domino_event
             * @classdesc Represents a RequestStartCheat.
             * @implements IRequestStartCheat
             * @constructor
             * @param {domino_event.IRequestStartCheat=} [properties] Properties to set
             */
            function RequestStartCheat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new RequestStartCheat instance using the specified properties.
             * @function create
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {domino_event.IRequestStartCheat=} [properties] Properties to set
             * @returns {domino_event.RequestStartCheat} RequestStartCheat instance
             */
            RequestStartCheat.create = function create(properties) {
                return new RequestStartCheat(properties);
            };
    
            /**
             * Encodes the specified RequestStartCheat message. Does not implicitly {@link domino_event.RequestStartCheat.verify|verify} messages.
             * @function encode
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {domino_event.IRequestStartCheat} message RequestStartCheat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestStartCheat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified RequestStartCheat message, length delimited. Does not implicitly {@link domino_event.RequestStartCheat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {domino_event.IRequestStartCheat} message RequestStartCheat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestStartCheat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestStartCheat message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.RequestStartCheat} RequestStartCheat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestStartCheat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.RequestStartCheat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestStartCheat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.RequestStartCheat} RequestStartCheat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestStartCheat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestStartCheat message.
             * @function verify
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestStartCheat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a RequestStartCheat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.RequestStartCheat} RequestStartCheat
             */
            RequestStartCheat.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.RequestStartCheat)
                    return object;
                return new $root.domino_event.RequestStartCheat();
            };
    
            /**
             * Creates a plain object from a RequestStartCheat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.RequestStartCheat
             * @static
             * @param {domino_event.RequestStartCheat} message RequestStartCheat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestStartCheat.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this RequestStartCheat to JSON.
             * @function toJSON
             * @memberof domino_event.RequestStartCheat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestStartCheat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestStartCheat;
        })();
    
        domino_event.ResponseStartCheat = (function() {
    
            /**
             * Properties of a ResponseStartCheat.
             * @memberof domino_event
             * @interface IResponseStartCheat
             */
    
            /**
             * Constructs a new ResponseStartCheat.
             * @memberof domino_event
             * @classdesc Represents a ResponseStartCheat.
             * @implements IResponseStartCheat
             * @constructor
             * @param {domino_event.IResponseStartCheat=} [properties] Properties to set
             */
            function ResponseStartCheat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new ResponseStartCheat instance using the specified properties.
             * @function create
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {domino_event.IResponseStartCheat=} [properties] Properties to set
             * @returns {domino_event.ResponseStartCheat} ResponseStartCheat instance
             */
            ResponseStartCheat.create = function create(properties) {
                return new ResponseStartCheat(properties);
            };
    
            /**
             * Encodes the specified ResponseStartCheat message. Does not implicitly {@link domino_event.ResponseStartCheat.verify|verify} messages.
             * @function encode
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {domino_event.IResponseStartCheat} message ResponseStartCheat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseStartCheat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified ResponseStartCheat message, length delimited. Does not implicitly {@link domino_event.ResponseStartCheat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {domino_event.IResponseStartCheat} message ResponseStartCheat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseStartCheat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseStartCheat message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.ResponseStartCheat} ResponseStartCheat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseStartCheat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.ResponseStartCheat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseStartCheat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.ResponseStartCheat} ResponseStartCheat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseStartCheat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseStartCheat message.
             * @function verify
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseStartCheat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a ResponseStartCheat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.ResponseStartCheat} ResponseStartCheat
             */
            ResponseStartCheat.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.ResponseStartCheat)
                    return object;
                return new $root.domino_event.ResponseStartCheat();
            };
    
            /**
             * Creates a plain object from a ResponseStartCheat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.ResponseStartCheat
             * @static
             * @param {domino_event.ResponseStartCheat} message ResponseStartCheat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseStartCheat.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this ResponseStartCheat to JSON.
             * @function toJSON
             * @memberof domino_event.ResponseStartCheat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseStartCheat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseStartCheat;
        })();
    
        domino_event.CheatCards = (function() {
    
            /**
             * Properties of a CheatCards.
             * @memberof domino_event
             * @interface ICheatCards
             * @property {number|null} [seat] CheatCards seat
             * @property {Array.<number>|null} [cards] CheatCards cards
             */
    
            /**
             * Constructs a new CheatCards.
             * @memberof domino_event
             * @classdesc Represents a CheatCards.
             * @implements ICheatCards
             * @constructor
             * @param {domino_event.ICheatCards=} [properties] Properties to set
             */
            function CheatCards(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CheatCards seat.
             * @member {number} seat
             * @memberof domino_event.CheatCards
             * @instance
             */
            CheatCards.prototype.seat = 0;
    
            /**
             * CheatCards cards.
             * @member {Array.<number>} cards
             * @memberof domino_event.CheatCards
             * @instance
             */
            CheatCards.prototype.cards = $util.emptyArray;
    
            /**
             * Creates a new CheatCards instance using the specified properties.
             * @function create
             * @memberof domino_event.CheatCards
             * @static
             * @param {domino_event.ICheatCards=} [properties] Properties to set
             * @returns {domino_event.CheatCards} CheatCards instance
             */
            CheatCards.create = function create(properties) {
                return new CheatCards(properties);
            };
    
            /**
             * Encodes the specified CheatCards message. Does not implicitly {@link domino_event.CheatCards.verify|verify} messages.
             * @function encode
             * @memberof domino_event.CheatCards
             * @static
             * @param {domino_event.ICheatCards} message CheatCards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CheatCards.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seat != null && message.hasOwnProperty("seat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified CheatCards message, length delimited. Does not implicitly {@link domino_event.CheatCards.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.CheatCards
             * @static
             * @param {domino_event.ICheatCards} message CheatCards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CheatCards.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CheatCards message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.CheatCards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.CheatCards} CheatCards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CheatCards.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.CheatCards();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seat = reader.int32();
                        break;
                    case 2:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CheatCards message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.CheatCards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.CheatCards} CheatCards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CheatCards.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CheatCards message.
             * @function verify
             * @memberof domino_event.CheatCards
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CheatCards.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seat != null && message.hasOwnProperty("seat"))
                    if (!$util.isInteger(message.seat))
                        return "seat: integer expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a CheatCards message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.CheatCards
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.CheatCards} CheatCards
             */
            CheatCards.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.CheatCards)
                    return object;
                var message = new $root.domino_event.CheatCards();
                if (object.seat != null)
                    message.seat = object.seat | 0;
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".domino_event.CheatCards.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CheatCards message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.CheatCards
             * @static
             * @param {domino_event.CheatCards} message CheatCards
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CheatCards.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults)
                    object.seat = 0;
                if (message.seat != null && message.hasOwnProperty("seat"))
                    object.seat = message.seat;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                return object;
            };
    
            /**
             * Converts this CheatCards to JSON.
             * @function toJSON
             * @memberof domino_event.CheatCards
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CheatCards.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CheatCards;
        })();
    
        domino_event.RequestCheat = (function() {
    
            /**
             * Properties of a RequestCheat.
             * @memberof domino_event
             * @interface IRequestCheat
             * @property {Array.<domino_event.ICheatCards>|null} [cheatCards] RequestCheat cheatCards
             */
    
            /**
             * Constructs a new RequestCheat.
             * @memberof domino_event
             * @classdesc Represents a RequestCheat.
             * @implements IRequestCheat
             * @constructor
             * @param {domino_event.IRequestCheat=} [properties] Properties to set
             */
            function RequestCheat(properties) {
                this.cheatCards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestCheat cheatCards.
             * @member {Array.<domino_event.ICheatCards>} cheatCards
             * @memberof domino_event.RequestCheat
             * @instance
             */
            RequestCheat.prototype.cheatCards = $util.emptyArray;
    
            /**
             * Creates a new RequestCheat instance using the specified properties.
             * @function create
             * @memberof domino_event.RequestCheat
             * @static
             * @param {domino_event.IRequestCheat=} [properties] Properties to set
             * @returns {domino_event.RequestCheat} RequestCheat instance
             */
            RequestCheat.create = function create(properties) {
                return new RequestCheat(properties);
            };
    
            /**
             * Encodes the specified RequestCheat message. Does not implicitly {@link domino_event.RequestCheat.verify|verify} messages.
             * @function encode
             * @memberof domino_event.RequestCheat
             * @static
             * @param {domino_event.IRequestCheat} message RequestCheat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCheat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cheatCards != null && message.cheatCards.length)
                    for (var i = 0; i < message.cheatCards.length; ++i)
                        $root.domino_event.CheatCards.encode(message.cheatCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified RequestCheat message, length delimited. Does not implicitly {@link domino_event.RequestCheat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof domino_event.RequestCheat
             * @static
             * @param {domino_event.IRequestCheat} message RequestCheat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCheat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestCheat message from the specified reader or buffer.
             * @function decode
             * @memberof domino_event.RequestCheat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {domino_event.RequestCheat} RequestCheat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCheat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.domino_event.RequestCheat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cheatCards && message.cheatCards.length))
                            message.cheatCards = [];
                        message.cheatCards.push($root.domino_event.CheatCards.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestCheat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof domino_event.RequestCheat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {domino_event.RequestCheat} RequestCheat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCheat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestCheat message.
             * @function verify
             * @memberof domino_event.RequestCheat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestCheat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cheatCards != null && message.hasOwnProperty("cheatCards")) {
                    if (!Array.isArray(message.cheatCards))
                        return "cheatCards: array expected";
                    for (var i = 0; i < message.cheatCards.length; ++i) {
                        var error = $root.domino_event.CheatCards.verify(message.cheatCards[i]);
                        if (error)
                            return "cheatCards." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a RequestCheat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof domino_event.RequestCheat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {domino_event.RequestCheat} RequestCheat
             */
            RequestCheat.fromObject = function fromObject(object) {
                if (object instanceof $root.domino_event.RequestCheat)
                    return object;
                var message = new $root.domino_event.RequestCheat();
                if (object.cheatCards) {
                    if (!Array.isArray(object.cheatCards))
                        throw TypeError(".domino_event.RequestCheat.cheatCards: array expected");
                    message.cheatCards = [];
                    for (var i = 0; i < object.cheatCards.length; ++i) {
                        if (typeof object.cheatCards[i] !== "object")
                            throw TypeError(".domino_event.RequestCheat.cheatCards: object expected");
                        message.cheatCards[i] = $root.domino_event.CheatCards.fromObject(object.cheatCards[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a RequestCheat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof domino_event.RequestCheat
             * @static
             * @param {domino_event.RequestCheat} message RequestCheat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestCheat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cheatCards = [];
                if (message.cheatCards && message.cheatCards.length) {
                    object.cheatCards = [];
                    for (var j = 0; j < message.cheatCards.length; ++j)
                        object.cheatCards[j] = $root.domino_event.CheatCards.toObject(message.cheatCards[j], options);
                }
                return object;
            };
    
            /**
             * Converts this RequestCheat to JSON.
             * @function toJSON
             * @memberof domino_event.RequestCheat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestCheat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestCheat;
        })();
    
        return domino_event;
    })();

    return $root;
});
