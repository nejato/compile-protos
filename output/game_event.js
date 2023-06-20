/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(window || global).game_event = (function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.game_event = (function() {
    
        /**
         * Namespace game_event.
         * @exports game_event
         * @namespace
         */
        var game_event = {};
    
        game_event.Request = (function() {
    
            /**
             * Properties of a Request.
             * @memberof game_event
             * @interface IRequest
             * @property {game_event.IRequestLeaveRoom|null} [leaveRoom] Request leaveRoom
             * @property {game_event.IRequestSendChatMessage|null} [sendChatMessage] Request sendChatMessage
             * @property {game_event.IRequestCreateRoom|null} [createRoom] Request createRoom
             * @property {game_event.IRequestJoinRoom|null} [joinRoom] Request joinRoom
             * @property {game_event.IRequestJoinAnyRoom|null} [joinAnyRoom] Request joinAnyRoom
             * @property {game_event.IRequestGetRoomList|null} [getRoomList] Request getRoomList
             * @property {game_event.IRequestDataSend|null} [dataSend] Request dataSend
             * @property {game_event.IRequestRoomConfig|null} [roomConfig] Request roomConfig
             * @property {game_event.IRequestAutoLeave|null} [autoLeave] Request autoLeave
             */
    
            /**
             * Constructs a new Request.
             * @memberof game_event
             * @classdesc Represents a Request.
             * @implements IRequest
             * @constructor
             * @param {game_event.IRequest=} [properties] Properties to set
             */
            function Request(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Request leaveRoom.
             * @member {game_event.IRequestLeaveRoom|null|undefined} leaveRoom
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.leaveRoom = null;
    
            /**
             * Request sendChatMessage.
             * @member {game_event.IRequestSendChatMessage|null|undefined} sendChatMessage
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.sendChatMessage = null;
    
            /**
             * Request createRoom.
             * @member {game_event.IRequestCreateRoom|null|undefined} createRoom
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.createRoom = null;
    
            /**
             * Request joinRoom.
             * @member {game_event.IRequestJoinRoom|null|undefined} joinRoom
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.joinRoom = null;
    
            /**
             * Request joinAnyRoom.
             * @member {game_event.IRequestJoinAnyRoom|null|undefined} joinAnyRoom
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.joinAnyRoom = null;
    
            /**
             * Request getRoomList.
             * @member {game_event.IRequestGetRoomList|null|undefined} getRoomList
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.getRoomList = null;
    
            /**
             * Request dataSend.
             * @member {game_event.IRequestDataSend|null|undefined} dataSend
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.dataSend = null;
    
            /**
             * Request roomConfig.
             * @member {game_event.IRequestRoomConfig|null|undefined} roomConfig
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.roomConfig = null;
    
            /**
             * Request autoLeave.
             * @member {game_event.IRequestAutoLeave|null|undefined} autoLeave
             * @memberof game_event.Request
             * @instance
             */
            Request.prototype.autoLeave = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Request message.
             * @member {"leaveRoom"|"sendChatMessage"|"createRoom"|"joinRoom"|"joinAnyRoom"|"getRoomList"|"dataSend"|"roomConfig"|"autoLeave"|undefined} message
             * @memberof game_event.Request
             * @instance
             */
            Object.defineProperty(Request.prototype, "message", {
                get: $util.oneOfGetter($oneOfFields = ["leaveRoom", "sendChatMessage", "createRoom", "joinRoom", "joinAnyRoom", "getRoomList", "dataSend", "roomConfig", "autoLeave"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof game_event.Request
             * @static
             * @param {game_event.IRequest=} [properties] Properties to set
             * @returns {game_event.Request} Request instance
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };
    
            /**
             * Encodes the specified Request message. Does not implicitly {@link game_event.Request.verify|verify} messages.
             * @function encode
             * @memberof game_event.Request
             * @static
             * @param {game_event.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.leaveRoom != null && Object.hasOwnProperty.call(message, "leaveRoom"))
                    $root.game_event.RequestLeaveRoom.encode(message.leaveRoom, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.sendChatMessage != null && Object.hasOwnProperty.call(message, "sendChatMessage"))
                    $root.game_event.RequestSendChatMessage.encode(message.sendChatMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.createRoom != null && Object.hasOwnProperty.call(message, "createRoom"))
                    $root.game_event.RequestCreateRoom.encode(message.createRoom, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.joinRoom != null && Object.hasOwnProperty.call(message, "joinRoom"))
                    $root.game_event.RequestJoinRoom.encode(message.joinRoom, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.joinAnyRoom != null && Object.hasOwnProperty.call(message, "joinAnyRoom"))
                    $root.game_event.RequestJoinAnyRoom.encode(message.joinAnyRoom, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.getRoomList != null && Object.hasOwnProperty.call(message, "getRoomList"))
                    $root.game_event.RequestGetRoomList.encode(message.getRoomList, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.dataSend != null && Object.hasOwnProperty.call(message, "dataSend"))
                    $root.game_event.RequestDataSend.encode(message.dataSend, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.roomConfig != null && Object.hasOwnProperty.call(message, "roomConfig"))
                    $root.game_event.RequestRoomConfig.encode(message.roomConfig, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.autoLeave != null && Object.hasOwnProperty.call(message, "autoLeave"))
                    $root.game_event.RequestAutoLeave.encode(message.autoLeave, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link game_event.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.Request
             * @static
             * @param {game_event.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.Request();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.leaveRoom = $root.game_event.RequestLeaveRoom.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.sendChatMessage = $root.game_event.RequestSendChatMessage.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.createRoom = $root.game_event.RequestCreateRoom.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.joinRoom = $root.game_event.RequestJoinRoom.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.joinAnyRoom = $root.game_event.RequestJoinAnyRoom.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.getRoomList = $root.game_event.RequestGetRoomList.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.dataSend = $root.game_event.RequestDataSend.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.roomConfig = $root.game_event.RequestRoomConfig.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.autoLeave = $root.game_event.RequestAutoLeave.decode(reader, reader.uint32());
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
             * @memberof game_event.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.Request} Request
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
             * @memberof game_event.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.leaveRoom != null && message.hasOwnProperty("leaveRoom")) {
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestLeaveRoom.verify(message.leaveRoom);
                        if (error)
                            return "leaveRoom." + error;
                    }
                }
                if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestSendChatMessage.verify(message.sendChatMessage);
                        if (error)
                            return "sendChatMessage." + error;
                    }
                }
                if (message.createRoom != null && message.hasOwnProperty("createRoom")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestCreateRoom.verify(message.createRoom);
                        if (error)
                            return "createRoom." + error;
                    }
                }
                if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestJoinRoom.verify(message.joinRoom);
                        if (error)
                            return "joinRoom." + error;
                    }
                }
                if (message.joinAnyRoom != null && message.hasOwnProperty("joinAnyRoom")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestJoinAnyRoom.verify(message.joinAnyRoom);
                        if (error)
                            return "joinAnyRoom." + error;
                    }
                }
                if (message.getRoomList != null && message.hasOwnProperty("getRoomList")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestGetRoomList.verify(message.getRoomList);
                        if (error)
                            return "getRoomList." + error;
                    }
                }
                if (message.dataSend != null && message.hasOwnProperty("dataSend")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestDataSend.verify(message.dataSend);
                        if (error)
                            return "dataSend." + error;
                    }
                }
                if (message.roomConfig != null && message.hasOwnProperty("roomConfig")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestRoomConfig.verify(message.roomConfig);
                        if (error)
                            return "roomConfig." + error;
                    }
                }
                if (message.autoLeave != null && message.hasOwnProperty("autoLeave")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.RequestAutoLeave.verify(message.autoLeave);
                        if (error)
                            return "autoLeave." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.Request} Request
             */
            Request.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.Request)
                    return object;
                var message = new $root.game_event.Request();
                if (object.leaveRoom != null) {
                    if (typeof object.leaveRoom !== "object")
                        throw TypeError(".game_event.Request.leaveRoom: object expected");
                    message.leaveRoom = $root.game_event.RequestLeaveRoom.fromObject(object.leaveRoom);
                }
                if (object.sendChatMessage != null) {
                    if (typeof object.sendChatMessage !== "object")
                        throw TypeError(".game_event.Request.sendChatMessage: object expected");
                    message.sendChatMessage = $root.game_event.RequestSendChatMessage.fromObject(object.sendChatMessage);
                }
                if (object.createRoom != null) {
                    if (typeof object.createRoom !== "object")
                        throw TypeError(".game_event.Request.createRoom: object expected");
                    message.createRoom = $root.game_event.RequestCreateRoom.fromObject(object.createRoom);
                }
                if (object.joinRoom != null) {
                    if (typeof object.joinRoom !== "object")
                        throw TypeError(".game_event.Request.joinRoom: object expected");
                    message.joinRoom = $root.game_event.RequestJoinRoom.fromObject(object.joinRoom);
                }
                if (object.joinAnyRoom != null) {
                    if (typeof object.joinAnyRoom !== "object")
                        throw TypeError(".game_event.Request.joinAnyRoom: object expected");
                    message.joinAnyRoom = $root.game_event.RequestJoinAnyRoom.fromObject(object.joinAnyRoom);
                }
                if (object.getRoomList != null) {
                    if (typeof object.getRoomList !== "object")
                        throw TypeError(".game_event.Request.getRoomList: object expected");
                    message.getRoomList = $root.game_event.RequestGetRoomList.fromObject(object.getRoomList);
                }
                if (object.dataSend != null) {
                    if (typeof object.dataSend !== "object")
                        throw TypeError(".game_event.Request.dataSend: object expected");
                    message.dataSend = $root.game_event.RequestDataSend.fromObject(object.dataSend);
                }
                if (object.roomConfig != null) {
                    if (typeof object.roomConfig !== "object")
                        throw TypeError(".game_event.Request.roomConfig: object expected");
                    message.roomConfig = $root.game_event.RequestRoomConfig.fromObject(object.roomConfig);
                }
                if (object.autoLeave != null) {
                    if (typeof object.autoLeave !== "object")
                        throw TypeError(".game_event.Request.autoLeave: object expected");
                    message.autoLeave = $root.game_event.RequestAutoLeave.fromObject(object.autoLeave);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.Request
             * @static
             * @param {game_event.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.leaveRoom != null && message.hasOwnProperty("leaveRoom")) {
                    object.leaveRoom = $root.game_event.RequestLeaveRoom.toObject(message.leaveRoom, options);
                    if (options.oneofs)
                        object.message = "leaveRoom";
                }
                if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
                    object.sendChatMessage = $root.game_event.RequestSendChatMessage.toObject(message.sendChatMessage, options);
                    if (options.oneofs)
                        object.message = "sendChatMessage";
                }
                if (message.createRoom != null && message.hasOwnProperty("createRoom")) {
                    object.createRoom = $root.game_event.RequestCreateRoom.toObject(message.createRoom, options);
                    if (options.oneofs)
                        object.message = "createRoom";
                }
                if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
                    object.joinRoom = $root.game_event.RequestJoinRoom.toObject(message.joinRoom, options);
                    if (options.oneofs)
                        object.message = "joinRoom";
                }
                if (message.joinAnyRoom != null && message.hasOwnProperty("joinAnyRoom")) {
                    object.joinAnyRoom = $root.game_event.RequestJoinAnyRoom.toObject(message.joinAnyRoom, options);
                    if (options.oneofs)
                        object.message = "joinAnyRoom";
                }
                if (message.getRoomList != null && message.hasOwnProperty("getRoomList")) {
                    object.getRoomList = $root.game_event.RequestGetRoomList.toObject(message.getRoomList, options);
                    if (options.oneofs)
                        object.message = "getRoomList";
                }
                if (message.dataSend != null && message.hasOwnProperty("dataSend")) {
                    object.dataSend = $root.game_event.RequestDataSend.toObject(message.dataSend, options);
                    if (options.oneofs)
                        object.message = "dataSend";
                }
                if (message.roomConfig != null && message.hasOwnProperty("roomConfig")) {
                    object.roomConfig = $root.game_event.RequestRoomConfig.toObject(message.roomConfig, options);
                    if (options.oneofs)
                        object.message = "roomConfig";
                }
                if (message.autoLeave != null && message.hasOwnProperty("autoLeave")) {
                    object.autoLeave = $root.game_event.RequestAutoLeave.toObject(message.autoLeave, options);
                    if (options.oneofs)
                        object.message = "autoLeave";
                }
                return object;
            };
    
            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof game_event.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Request;
        })();
    
        game_event.Response = (function() {
    
            /**
             * Properties of a Response.
             * @memberof game_event
             * @interface IResponse
             * @property {game_event.IResponseError|null} [error] Response error
             * @property {game_event.IResponseGameMessage|null} [gameMessage] Response gameMessage
             * @property {game_event.IResponseChatMessage|null} [chatMessage] Response chatMessage
             * @property {game_event.IResponseRoomList|null} [roomList] Response roomList
             * @property {game_event.IResponseRoomConfig|null} [roomConfig] Response roomConfig
             * @property {game_event.IResponseAutoLeave|null} [autoLeave] Response autoLeave
             * @property {game_event.IResponseUserJoined|null} [userJoined] Response userJoined
             * @property {game_event.IResponseUserLeft|null} [userLeft] Response userLeft
             */
    
            /**
             * Constructs a new Response.
             * @memberof game_event
             * @classdesc Represents a Response.
             * @implements IResponse
             * @constructor
             * @param {game_event.IResponse=} [properties] Properties to set
             */
            function Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Response error.
             * @member {game_event.IResponseError|null|undefined} error
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.error = null;
    
            /**
             * Response gameMessage.
             * @member {game_event.IResponseGameMessage|null|undefined} gameMessage
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.gameMessage = null;
    
            /**
             * Response chatMessage.
             * @member {game_event.IResponseChatMessage|null|undefined} chatMessage
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.chatMessage = null;
    
            /**
             * Response roomList.
             * @member {game_event.IResponseRoomList|null|undefined} roomList
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.roomList = null;
    
            /**
             * Response roomConfig.
             * @member {game_event.IResponseRoomConfig|null|undefined} roomConfig
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.roomConfig = null;
    
            /**
             * Response autoLeave.
             * @member {game_event.IResponseAutoLeave|null|undefined} autoLeave
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.autoLeave = null;
    
            /**
             * Response userJoined.
             * @member {game_event.IResponseUserJoined|null|undefined} userJoined
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.userJoined = null;
    
            /**
             * Response userLeft.
             * @member {game_event.IResponseUserLeft|null|undefined} userLeft
             * @memberof game_event.Response
             * @instance
             */
            Response.prototype.userLeft = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Response message.
             * @member {"error"|"gameMessage"|"chatMessage"|"roomList"|"roomConfig"|"autoLeave"|"userJoined"|"userLeft"|undefined} message
             * @memberof game_event.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "message", {
                get: $util.oneOfGetter($oneOfFields = ["error", "gameMessage", "chatMessage", "roomList", "roomConfig", "autoLeave", "userJoined", "userLeft"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof game_event.Response
             * @static
             * @param {game_event.IResponse=} [properties] Properties to set
             * @returns {game_event.Response} Response instance
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };
    
            /**
             * Encodes the specified Response message. Does not implicitly {@link game_event.Response.verify|verify} messages.
             * @function encode
             * @memberof game_event.Response
             * @static
             * @param {game_event.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.game_event.ResponseError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.gameMessage != null && Object.hasOwnProperty.call(message, "gameMessage"))
                    $root.game_event.ResponseGameMessage.encode(message.gameMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.chatMessage != null && Object.hasOwnProperty.call(message, "chatMessage"))
                    $root.game_event.ResponseChatMessage.encode(message.chatMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.roomList != null && Object.hasOwnProperty.call(message, "roomList"))
                    $root.game_event.ResponseRoomList.encode(message.roomList, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.roomConfig != null && Object.hasOwnProperty.call(message, "roomConfig"))
                    $root.game_event.ResponseRoomConfig.encode(message.roomConfig, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.autoLeave != null && Object.hasOwnProperty.call(message, "autoLeave"))
                    $root.game_event.ResponseAutoLeave.encode(message.autoLeave, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.userJoined != null && Object.hasOwnProperty.call(message, "userJoined"))
                    $root.game_event.ResponseUserJoined.encode(message.userJoined, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.userLeft != null && Object.hasOwnProperty.call(message, "userLeft"))
                    $root.game_event.ResponseUserLeft.encode(message.userLeft, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link game_event.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.Response
             * @static
             * @param {game_event.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.game_event.ResponseError.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.gameMessage = $root.game_event.ResponseGameMessage.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.chatMessage = $root.game_event.ResponseChatMessage.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.roomList = $root.game_event.ResponseRoomList.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.roomConfig = $root.game_event.ResponseRoomConfig.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.autoLeave = $root.game_event.ResponseAutoLeave.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.userJoined = $root.game_event.ResponseUserJoined.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.userLeft = $root.game_event.ResponseUserLeft.decode(reader, reader.uint32());
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
             * @memberof game_event.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.Response} Response
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
             * @memberof game_event.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.error != null && message.hasOwnProperty("error")) {
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseError.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.gameMessage != null && message.hasOwnProperty("gameMessage")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseGameMessage.verify(message.gameMessage);
                        if (error)
                            return "gameMessage." + error;
                    }
                }
                if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseChatMessage.verify(message.chatMessage);
                        if (error)
                            return "chatMessage." + error;
                    }
                }
                if (message.roomList != null && message.hasOwnProperty("roomList")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseRoomList.verify(message.roomList);
                        if (error)
                            return "roomList." + error;
                    }
                }
                if (message.roomConfig != null && message.hasOwnProperty("roomConfig")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseRoomConfig.verify(message.roomConfig);
                        if (error)
                            return "roomConfig." + error;
                    }
                }
                if (message.autoLeave != null && message.hasOwnProperty("autoLeave")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseAutoLeave.verify(message.autoLeave);
                        if (error)
                            return "autoLeave." + error;
                    }
                }
                if (message.userJoined != null && message.hasOwnProperty("userJoined")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseUserJoined.verify(message.userJoined);
                        if (error)
                            return "userJoined." + error;
                    }
                }
                if (message.userLeft != null && message.hasOwnProperty("userLeft")) {
                    if (properties.message === 1)
                        return "message: multiple values";
                    properties.message = 1;
                    {
                        var error = $root.game_event.ResponseUserLeft.verify(message.userLeft);
                        if (error)
                            return "userLeft." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.Response} Response
             */
            Response.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.Response)
                    return object;
                var message = new $root.game_event.Response();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".game_event.Response.error: object expected");
                    message.error = $root.game_event.ResponseError.fromObject(object.error);
                }
                if (object.gameMessage != null) {
                    if (typeof object.gameMessage !== "object")
                        throw TypeError(".game_event.Response.gameMessage: object expected");
                    message.gameMessage = $root.game_event.ResponseGameMessage.fromObject(object.gameMessage);
                }
                if (object.chatMessage != null) {
                    if (typeof object.chatMessage !== "object")
                        throw TypeError(".game_event.Response.chatMessage: object expected");
                    message.chatMessage = $root.game_event.ResponseChatMessage.fromObject(object.chatMessage);
                }
                if (object.roomList != null) {
                    if (typeof object.roomList !== "object")
                        throw TypeError(".game_event.Response.roomList: object expected");
                    message.roomList = $root.game_event.ResponseRoomList.fromObject(object.roomList);
                }
                if (object.roomConfig != null) {
                    if (typeof object.roomConfig !== "object")
                        throw TypeError(".game_event.Response.roomConfig: object expected");
                    message.roomConfig = $root.game_event.ResponseRoomConfig.fromObject(object.roomConfig);
                }
                if (object.autoLeave != null) {
                    if (typeof object.autoLeave !== "object")
                        throw TypeError(".game_event.Response.autoLeave: object expected");
                    message.autoLeave = $root.game_event.ResponseAutoLeave.fromObject(object.autoLeave);
                }
                if (object.userJoined != null) {
                    if (typeof object.userJoined !== "object")
                        throw TypeError(".game_event.Response.userJoined: object expected");
                    message.userJoined = $root.game_event.ResponseUserJoined.fromObject(object.userJoined);
                }
                if (object.userLeft != null) {
                    if (typeof object.userLeft !== "object")
                        throw TypeError(".game_event.Response.userLeft: object expected");
                    message.userLeft = $root.game_event.ResponseUserLeft.fromObject(object.userLeft);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.Response
             * @static
             * @param {game_event.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.game_event.ResponseError.toObject(message.error, options);
                    if (options.oneofs)
                        object.message = "error";
                }
                if (message.gameMessage != null && message.hasOwnProperty("gameMessage")) {
                    object.gameMessage = $root.game_event.ResponseGameMessage.toObject(message.gameMessage, options);
                    if (options.oneofs)
                        object.message = "gameMessage";
                }
                if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
                    object.chatMessage = $root.game_event.ResponseChatMessage.toObject(message.chatMessage, options);
                    if (options.oneofs)
                        object.message = "chatMessage";
                }
                if (message.roomList != null && message.hasOwnProperty("roomList")) {
                    object.roomList = $root.game_event.ResponseRoomList.toObject(message.roomList, options);
                    if (options.oneofs)
                        object.message = "roomList";
                }
                if (message.roomConfig != null && message.hasOwnProperty("roomConfig")) {
                    object.roomConfig = $root.game_event.ResponseRoomConfig.toObject(message.roomConfig, options);
                    if (options.oneofs)
                        object.message = "roomConfig";
                }
                if (message.autoLeave != null && message.hasOwnProperty("autoLeave")) {
                    object.autoLeave = $root.game_event.ResponseAutoLeave.toObject(message.autoLeave, options);
                    if (options.oneofs)
                        object.message = "autoLeave";
                }
                if (message.userJoined != null && message.hasOwnProperty("userJoined")) {
                    object.userJoined = $root.game_event.ResponseUserJoined.toObject(message.userJoined, options);
                    if (options.oneofs)
                        object.message = "userJoined";
                }
                if (message.userLeft != null && message.hasOwnProperty("userLeft")) {
                    object.userLeft = $root.game_event.ResponseUserLeft.toObject(message.userLeft, options);
                    if (options.oneofs)
                        object.message = "userLeft";
                }
                return object;
            };
    
            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof game_event.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Response;
        })();
    
        game_event.ResponseError = (function() {
    
            /**
             * Properties of a ResponseError.
             * @memberof game_event
             * @interface IResponseError
             * @property {number|null} [code] ResponseError code
             */
    
            /**
             * Constructs a new ResponseError.
             * @memberof game_event
             * @classdesc Represents a ResponseError.
             * @implements IResponseError
             * @constructor
             * @param {game_event.IResponseError=} [properties] Properties to set
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
             * @memberof game_event.ResponseError
             * @instance
             */
            ResponseError.prototype.code = 0;
    
            /**
             * Creates a new ResponseError instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseError
             * @static
             * @param {game_event.IResponseError=} [properties] Properties to set
             * @returns {game_event.ResponseError} ResponseError instance
             */
            ResponseError.create = function create(properties) {
                return new ResponseError(properties);
            };
    
            /**
             * Encodes the specified ResponseError message. Does not implicitly {@link game_event.ResponseError.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseError
             * @static
             * @param {game_event.IResponseError} message ResponseError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseError message, length delimited. Does not implicitly {@link game_event.ResponseError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseError
             * @static
             * @param {game_event.IResponseError} message ResponseError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseError message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseError} ResponseError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.uint32();
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
             * @memberof game_event.ResponseError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseError} ResponseError
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
             * @memberof game_event.ResponseError
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
                return null;
            };
    
            /**
             * Creates a ResponseError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseError} ResponseError
             */
            ResponseError.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseError)
                    return object;
                var message = new $root.game_event.ResponseError();
                if (object.code != null)
                    message.code = object.code >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseError
             * @static
             * @param {game_event.ResponseError} message ResponseError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.code = 0;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                return object;
            };
    
            /**
             * Converts this ResponseError to JSON.
             * @function toJSON
             * @memberof game_event.ResponseError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseError;
        })();
    
        game_event.RequestJoinRoom = (function() {
    
            /**
             * Properties of a RequestJoinRoom.
             * @memberof game_event
             * @interface IRequestJoinRoom
             * @property {number|null} [roomId] RequestJoinRoom roomId
             * @property {string|null} [password] RequestJoinRoom password
             * @property {boolean|null} [isViewer] RequestJoinRoom isViewer
             */
    
            /**
             * Constructs a new RequestJoinRoom.
             * @memberof game_event
             * @classdesc Represents a RequestJoinRoom.
             * @implements IRequestJoinRoom
             * @constructor
             * @param {game_event.IRequestJoinRoom=} [properties] Properties to set
             */
            function RequestJoinRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestJoinRoom roomId.
             * @member {number} roomId
             * @memberof game_event.RequestJoinRoom
             * @instance
             */
            RequestJoinRoom.prototype.roomId = 0;
    
            /**
             * RequestJoinRoom password.
             * @member {string} password
             * @memberof game_event.RequestJoinRoom
             * @instance
             */
            RequestJoinRoom.prototype.password = "";
    
            /**
             * RequestJoinRoom isViewer.
             * @member {boolean} isViewer
             * @memberof game_event.RequestJoinRoom
             * @instance
             */
            RequestJoinRoom.prototype.isViewer = false;
    
            /**
             * Creates a new RequestJoinRoom instance using the specified properties.
             * @function create
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {game_event.IRequestJoinRoom=} [properties] Properties to set
             * @returns {game_event.RequestJoinRoom} RequestJoinRoom instance
             */
            RequestJoinRoom.create = function create(properties) {
                return new RequestJoinRoom(properties);
            };
    
            /**
             * Encodes the specified RequestJoinRoom message. Does not implicitly {@link game_event.RequestJoinRoom.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {game_event.IRequestJoinRoom} message RequestJoinRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestJoinRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.isViewer != null && Object.hasOwnProperty.call(message, "isViewer"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isViewer);
                return writer;
            };
    
            /**
             * Encodes the specified RequestJoinRoom message, length delimited. Does not implicitly {@link game_event.RequestJoinRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {game_event.IRequestJoinRoom} message RequestJoinRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestJoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestJoinRoom message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestJoinRoom} RequestJoinRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestJoinRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestJoinRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    case 3:
                        message.isViewer = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestJoinRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestJoinRoom} RequestJoinRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestJoinRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestJoinRoom message.
             * @function verify
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestJoinRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.isViewer != null && message.hasOwnProperty("isViewer"))
                    if (typeof message.isViewer !== "boolean")
                        return "isViewer: boolean expected";
                return null;
            };
    
            /**
             * Creates a RequestJoinRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestJoinRoom} RequestJoinRoom
             */
            RequestJoinRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestJoinRoom)
                    return object;
                var message = new $root.game_event.RequestJoinRoom();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.password != null)
                    message.password = String(object.password);
                if (object.isViewer != null)
                    message.isViewer = Boolean(object.isViewer);
                return message;
            };
    
            /**
             * Creates a plain object from a RequestJoinRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestJoinRoom
             * @static
             * @param {game_event.RequestJoinRoom} message RequestJoinRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestJoinRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = 0;
                    object.password = "";
                    object.isViewer = false;
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.isViewer != null && message.hasOwnProperty("isViewer"))
                    object.isViewer = message.isViewer;
                return object;
            };
    
            /**
             * Converts this RequestJoinRoom to JSON.
             * @function toJSON
             * @memberof game_event.RequestJoinRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestJoinRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestJoinRoom;
        })();
    
        game_event.RequestCreateRoom = (function() {
    
            /**
             * Properties of a RequestCreateRoom.
             * @memberof game_event
             * @interface IRequestCreateRoom
             * @property {number|Long|null} [bet] RequestCreateRoom bet
             * @property {string|null} [password] RequestCreateRoom password
             * @property {number|null} [maxPlayers] RequestCreateRoom maxPlayers
             */
    
            /**
             * Constructs a new RequestCreateRoom.
             * @memberof game_event
             * @classdesc Represents a RequestCreateRoom.
             * @implements IRequestCreateRoom
             * @constructor
             * @param {game_event.IRequestCreateRoom=} [properties] Properties to set
             */
            function RequestCreateRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestCreateRoom bet.
             * @member {number|Long} bet
             * @memberof game_event.RequestCreateRoom
             * @instance
             */
            RequestCreateRoom.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * RequestCreateRoom password.
             * @member {string} password
             * @memberof game_event.RequestCreateRoom
             * @instance
             */
            RequestCreateRoom.prototype.password = "";
    
            /**
             * RequestCreateRoom maxPlayers.
             * @member {number} maxPlayers
             * @memberof game_event.RequestCreateRoom
             * @instance
             */
            RequestCreateRoom.prototype.maxPlayers = 0;
    
            /**
             * Creates a new RequestCreateRoom instance using the specified properties.
             * @function create
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {game_event.IRequestCreateRoom=} [properties] Properties to set
             * @returns {game_event.RequestCreateRoom} RequestCreateRoom instance
             */
            RequestCreateRoom.create = function create(properties) {
                return new RequestCreateRoom(properties);
            };
    
            /**
             * Encodes the specified RequestCreateRoom message. Does not implicitly {@link game_event.RequestCreateRoom.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {game_event.IRequestCreateRoom} message RequestCreateRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCreateRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bet);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.maxPlayers != null && Object.hasOwnProperty.call(message, "maxPlayers"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxPlayers);
                return writer;
            };
    
            /**
             * Encodes the specified RequestCreateRoom message, length delimited. Does not implicitly {@link game_event.RequestCreateRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {game_event.IRequestCreateRoom} message RequestCreateRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestCreateRoom message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestCreateRoom} RequestCreateRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCreateRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestCreateRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bet = reader.int64();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    case 3:
                        message.maxPlayers = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestCreateRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestCreateRoom} RequestCreateRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCreateRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestCreateRoom message.
             * @function verify
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestCreateRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                    if (!$util.isInteger(message.maxPlayers))
                        return "maxPlayers: integer expected";
                return null;
            };
    
            /**
             * Creates a RequestCreateRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestCreateRoom} RequestCreateRoom
             */
            RequestCreateRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestCreateRoom)
                    return object;
                var message = new $root.game_event.RequestCreateRoom();
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                if (object.password != null)
                    message.password = String(object.password);
                if (object.maxPlayers != null)
                    message.maxPlayers = object.maxPlayers | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RequestCreateRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestCreateRoom
             * @static
             * @param {game_event.RequestCreateRoom} message RequestCreateRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestCreateRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                    object.password = "";
                    object.maxPlayers = 0;
                }
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                    object.maxPlayers = message.maxPlayers;
                return object;
            };
    
            /**
             * Converts this RequestCreateRoom to JSON.
             * @function toJSON
             * @memberof game_event.RequestCreateRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestCreateRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestCreateRoom;
        })();
    
        game_event.RequestJoinAnyRoom = (function() {
    
            /**
             * Properties of a RequestJoinAnyRoom.
             * @memberof game_event
             * @interface IRequestJoinAnyRoom
             * @property {number|Long|null} [bet] RequestJoinAnyRoom bet
             */
    
            /**
             * Constructs a new RequestJoinAnyRoom.
             * @memberof game_event
             * @classdesc Represents a RequestJoinAnyRoom.
             * @implements IRequestJoinAnyRoom
             * @constructor
             * @param {game_event.IRequestJoinAnyRoom=} [properties] Properties to set
             */
            function RequestJoinAnyRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestJoinAnyRoom bet.
             * @member {number|Long} bet
             * @memberof game_event.RequestJoinAnyRoom
             * @instance
             */
            RequestJoinAnyRoom.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new RequestJoinAnyRoom instance using the specified properties.
             * @function create
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {game_event.IRequestJoinAnyRoom=} [properties] Properties to set
             * @returns {game_event.RequestJoinAnyRoom} RequestJoinAnyRoom instance
             */
            RequestJoinAnyRoom.create = function create(properties) {
                return new RequestJoinAnyRoom(properties);
            };
    
            /**
             * Encodes the specified RequestJoinAnyRoom message. Does not implicitly {@link game_event.RequestJoinAnyRoom.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {game_event.IRequestJoinAnyRoom} message RequestJoinAnyRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestJoinAnyRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bet);
                return writer;
            };
    
            /**
             * Encodes the specified RequestJoinAnyRoom message, length delimited. Does not implicitly {@link game_event.RequestJoinAnyRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {game_event.IRequestJoinAnyRoom} message RequestJoinAnyRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestJoinAnyRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestJoinAnyRoom message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestJoinAnyRoom} RequestJoinAnyRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestJoinAnyRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestJoinAnyRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bet = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestJoinAnyRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestJoinAnyRoom} RequestJoinAnyRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestJoinAnyRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestJoinAnyRoom message.
             * @function verify
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestJoinAnyRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a RequestJoinAnyRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestJoinAnyRoom} RequestJoinAnyRoom
             */
            RequestJoinAnyRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestJoinAnyRoom)
                    return object;
                var message = new $root.game_event.RequestJoinAnyRoom();
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a RequestJoinAnyRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestJoinAnyRoom
             * @static
             * @param {game_event.RequestJoinAnyRoom} message RequestJoinAnyRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestJoinAnyRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                return object;
            };
    
            /**
             * Converts this RequestJoinAnyRoom to JSON.
             * @function toJSON
             * @memberof game_event.RequestJoinAnyRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestJoinAnyRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestJoinAnyRoom;
        })();
    
        game_event.RequestGetRoomList = (function() {
    
            /**
             * Properties of a RequestGetRoomList.
             * @memberof game_event
             * @interface IRequestGetRoomList
             * @property {number|Long|null} [bet] RequestGetRoomList bet
             */
    
            /**
             * Constructs a new RequestGetRoomList.
             * @memberof game_event
             * @classdesc Represents a RequestGetRoomList.
             * @implements IRequestGetRoomList
             * @constructor
             * @param {game_event.IRequestGetRoomList=} [properties] Properties to set
             */
            function RequestGetRoomList(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestGetRoomList bet.
             * @member {number|Long} bet
             * @memberof game_event.RequestGetRoomList
             * @instance
             */
            RequestGetRoomList.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new RequestGetRoomList instance using the specified properties.
             * @function create
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {game_event.IRequestGetRoomList=} [properties] Properties to set
             * @returns {game_event.RequestGetRoomList} RequestGetRoomList instance
             */
            RequestGetRoomList.create = function create(properties) {
                return new RequestGetRoomList(properties);
            };
    
            /**
             * Encodes the specified RequestGetRoomList message. Does not implicitly {@link game_event.RequestGetRoomList.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {game_event.IRequestGetRoomList} message RequestGetRoomList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestGetRoomList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bet);
                return writer;
            };
    
            /**
             * Encodes the specified RequestGetRoomList message, length delimited. Does not implicitly {@link game_event.RequestGetRoomList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {game_event.IRequestGetRoomList} message RequestGetRoomList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestGetRoomList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestGetRoomList message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestGetRoomList} RequestGetRoomList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestGetRoomList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestGetRoomList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bet = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestGetRoomList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestGetRoomList} RequestGetRoomList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestGetRoomList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestGetRoomList message.
             * @function verify
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestGetRoomList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a RequestGetRoomList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestGetRoomList} RequestGetRoomList
             */
            RequestGetRoomList.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestGetRoomList)
                    return object;
                var message = new $root.game_event.RequestGetRoomList();
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a RequestGetRoomList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestGetRoomList
             * @static
             * @param {game_event.RequestGetRoomList} message RequestGetRoomList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestGetRoomList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                return object;
            };
    
            /**
             * Converts this RequestGetRoomList to JSON.
             * @function toJSON
             * @memberof game_event.RequestGetRoomList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestGetRoomList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestGetRoomList;
        })();
    
        game_event.Room = (function() {
    
            /**
             * Properties of a Room.
             * @memberof game_event
             * @interface IRoom
             * @property {number|null} [roomId] Room roomId
             * @property {boolean|null} [isPrivate] Room isPrivate
             * @property {number|Long|null} [bet] Room bet
             * @property {number|Long|null} [createTime] Room createTime
             * @property {Object.<string,string>|null} [metadata] Room metadata
             */
    
            /**
             * Constructs a new Room.
             * @memberof game_event
             * @classdesc Represents a Room.
             * @implements IRoom
             * @constructor
             * @param {game_event.IRoom=} [properties] Properties to set
             */
            function Room(properties) {
                this.metadata = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Room roomId.
             * @member {number} roomId
             * @memberof game_event.Room
             * @instance
             */
            Room.prototype.roomId = 0;
    
            /**
             * Room isPrivate.
             * @member {boolean} isPrivate
             * @memberof game_event.Room
             * @instance
             */
            Room.prototype.isPrivate = false;
    
            /**
             * Room bet.
             * @member {number|Long} bet
             * @memberof game_event.Room
             * @instance
             */
            Room.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Room createTime.
             * @member {number|Long} createTime
             * @memberof game_event.Room
             * @instance
             */
            Room.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Room metadata.
             * @member {Object.<string,string>} metadata
             * @memberof game_event.Room
             * @instance
             */
            Room.prototype.metadata = $util.emptyObject;
    
            /**
             * Creates a new Room instance using the specified properties.
             * @function create
             * @memberof game_event.Room
             * @static
             * @param {game_event.IRoom=} [properties] Properties to set
             * @returns {game_event.Room} Room instance
             */
            Room.create = function create(properties) {
                return new Room(properties);
            };
    
            /**
             * Encodes the specified Room message. Does not implicitly {@link game_event.Room.verify|verify} messages.
             * @function encode
             * @memberof game_event.Room
             * @static
             * @param {game_event.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.isPrivate != null && Object.hasOwnProperty.call(message, "isPrivate"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isPrivate);
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bet);
                if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createTime);
                if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                    for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link game_event.Room.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.Room
             * @static
             * @param {game_event.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Room message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.Room(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.isPrivate = reader.bool();
                        break;
                    case 3:
                        message.bet = reader.int64();
                        break;
                    case 4:
                        message.createTime = reader.int64();
                        break;
                    case 5:
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Room message.
             * @function verify
             * @memberof game_event.Room
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Room.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.isPrivate != null && message.hasOwnProperty("isPrivate"))
                    if (typeof message.isPrivate !== "boolean")
                        return "isPrivate: boolean expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                        return "createTime: integer|Long expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    if (!$util.isObject(message.metadata))
                        return "metadata: object expected";
                    var key = Object.keys(message.metadata);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.metadata[key[i]]))
                            return "metadata: string{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.Room
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.Room} Room
             */
            Room.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.Room)
                    return object;
                var message = new $root.game_event.Room();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.isPrivate != null)
                    message.isPrivate = Boolean(object.isPrivate);
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                if (object.createTime != null)
                    if ($util.Long)
                        (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                    else if (typeof object.createTime === "string")
                        message.createTime = parseInt(object.createTime, 10);
                    else if (typeof object.createTime === "number")
                        message.createTime = object.createTime;
                    else if (typeof object.createTime === "object")
                        message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
                if (object.metadata) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(".game_event.Room.metadata: object expected");
                    message.metadata = {};
                    for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                        message.metadata[keys[i]] = String(object.metadata[keys[i]]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.Room
             * @static
             * @param {game_event.Room} message Room
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Room.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.metadata = {};
                if (options.defaults) {
                    object.roomId = 0;
                    object.isPrivate = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createTime = options.longs === String ? "0" : 0;
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.isPrivate != null && message.hasOwnProperty("isPrivate"))
                    object.isPrivate = message.isPrivate;
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (typeof message.createTime === "number")
                        object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                    else
                        object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
                var keys2;
                if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                    object.metadata = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.metadata[keys2[j]] = message.metadata[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this Room to JSON.
             * @function toJSON
             * @memberof game_event.Room
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Room.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Room;
        })();
    
        game_event.ResponseRoomList = (function() {
    
            /**
             * Properties of a ResponseRoomList.
             * @memberof game_event
             * @interface IResponseRoomList
             * @property {number|Long|null} [bet] ResponseRoomList bet
             * @property {Array.<game_event.IRoom>|null} [rooms] ResponseRoomList rooms
             */
    
            /**
             * Constructs a new ResponseRoomList.
             * @memberof game_event
             * @classdesc Represents a ResponseRoomList.
             * @implements IResponseRoomList
             * @constructor
             * @param {game_event.IResponseRoomList=} [properties] Properties to set
             */
            function ResponseRoomList(properties) {
                this.rooms = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseRoomList bet.
             * @member {number|Long} bet
             * @memberof game_event.ResponseRoomList
             * @instance
             */
            ResponseRoomList.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ResponseRoomList rooms.
             * @member {Array.<game_event.IRoom>} rooms
             * @memberof game_event.ResponseRoomList
             * @instance
             */
            ResponseRoomList.prototype.rooms = $util.emptyArray;
    
            /**
             * Creates a new ResponseRoomList instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {game_event.IResponseRoomList=} [properties] Properties to set
             * @returns {game_event.ResponseRoomList} ResponseRoomList instance
             */
            ResponseRoomList.create = function create(properties) {
                return new ResponseRoomList(properties);
            };
    
            /**
             * Encodes the specified ResponseRoomList message. Does not implicitly {@link game_event.ResponseRoomList.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {game_event.IResponseRoomList} message ResponseRoomList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRoomList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bet);
                if (message.rooms != null && message.rooms.length)
                    for (var i = 0; i < message.rooms.length; ++i)
                        $root.game_event.Room.encode(message.rooms[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ResponseRoomList message, length delimited. Does not implicitly {@link game_event.ResponseRoomList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {game_event.IResponseRoomList} message ResponseRoomList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRoomList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseRoomList message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseRoomList} ResponseRoomList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRoomList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseRoomList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bet = reader.int64();
                        break;
                    case 2:
                        if (!(message.rooms && message.rooms.length))
                            message.rooms = [];
                        message.rooms.push($root.game_event.Room.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseRoomList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseRoomList} ResponseRoomList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRoomList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseRoomList message.
             * @function verify
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseRoomList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                if (message.rooms != null && message.hasOwnProperty("rooms")) {
                    if (!Array.isArray(message.rooms))
                        return "rooms: array expected";
                    for (var i = 0; i < message.rooms.length; ++i) {
                        var error = $root.game_event.Room.verify(message.rooms[i]);
                        if (error)
                            return "rooms." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a ResponseRoomList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseRoomList} ResponseRoomList
             */
            ResponseRoomList.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseRoomList)
                    return object;
                var message = new $root.game_event.ResponseRoomList();
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                if (object.rooms) {
                    if (!Array.isArray(object.rooms))
                        throw TypeError(".game_event.ResponseRoomList.rooms: array expected");
                    message.rooms = [];
                    for (var i = 0; i < object.rooms.length; ++i) {
                        if (typeof object.rooms[i] !== "object")
                            throw TypeError(".game_event.ResponseRoomList.rooms: object expected");
                        message.rooms[i] = $root.game_event.Room.fromObject(object.rooms[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseRoomList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseRoomList
             * @static
             * @param {game_event.ResponseRoomList} message ResponseRoomList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseRoomList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rooms = [];
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                if (message.rooms && message.rooms.length) {
                    object.rooms = [];
                    for (var j = 0; j < message.rooms.length; ++j)
                        object.rooms[j] = $root.game_event.Room.toObject(message.rooms[j], options);
                }
                return object;
            };
    
            /**
             * Converts this ResponseRoomList to JSON.
             * @function toJSON
             * @memberof game_event.ResponseRoomList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseRoomList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseRoomList;
        })();
    
        game_event.RequestLeaveRoom = (function() {
    
            /**
             * Properties of a RequestLeaveRoom.
             * @memberof game_event
             * @interface IRequestLeaveRoom
             * @property {number|null} [roomId] RequestLeaveRoom roomId
             */
    
            /**
             * Constructs a new RequestLeaveRoom.
             * @memberof game_event
             * @classdesc Represents a RequestLeaveRoom.
             * @implements IRequestLeaveRoom
             * @constructor
             * @param {game_event.IRequestLeaveRoom=} [properties] Properties to set
             */
            function RequestLeaveRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestLeaveRoom roomId.
             * @member {number} roomId
             * @memberof game_event.RequestLeaveRoom
             * @instance
             */
            RequestLeaveRoom.prototype.roomId = 0;
    
            /**
             * Creates a new RequestLeaveRoom instance using the specified properties.
             * @function create
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {game_event.IRequestLeaveRoom=} [properties] Properties to set
             * @returns {game_event.RequestLeaveRoom} RequestLeaveRoom instance
             */
            RequestLeaveRoom.create = function create(properties) {
                return new RequestLeaveRoom(properties);
            };
    
            /**
             * Encodes the specified RequestLeaveRoom message. Does not implicitly {@link game_event.RequestLeaveRoom.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {game_event.IRequestLeaveRoom} message RequestLeaveRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestLeaveRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                return writer;
            };
    
            /**
             * Encodes the specified RequestLeaveRoom message, length delimited. Does not implicitly {@link game_event.RequestLeaveRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {game_event.IRequestLeaveRoom} message RequestLeaveRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestLeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestLeaveRoom message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestLeaveRoom} RequestLeaveRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestLeaveRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestLeaveRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestLeaveRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestLeaveRoom} RequestLeaveRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestLeaveRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestLeaveRoom message.
             * @function verify
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestLeaveRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                return null;
            };
    
            /**
             * Creates a RequestLeaveRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestLeaveRoom} RequestLeaveRoom
             */
            RequestLeaveRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestLeaveRoom)
                    return object;
                var message = new $root.game_event.RequestLeaveRoom();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RequestLeaveRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestLeaveRoom
             * @static
             * @param {game_event.RequestLeaveRoom} message RequestLeaveRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestLeaveRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.roomId = 0;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                return object;
            };
    
            /**
             * Converts this RequestLeaveRoom to JSON.
             * @function toJSON
             * @memberof game_event.RequestLeaveRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestLeaveRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestLeaveRoom;
        })();
    
        game_event.RequestDataSend = (function() {
    
            /**
             * Properties of a RequestDataSend.
             * @memberof game_event
             * @interface IRequestDataSend
             * @property {number|null} [roomId] RequestDataSend roomId
             * @property {Uint8Array|null} [data] RequestDataSend data
             */
    
            /**
             * Constructs a new RequestDataSend.
             * @memberof game_event
             * @classdesc Represents a RequestDataSend.
             * @implements IRequestDataSend
             * @constructor
             * @param {game_event.IRequestDataSend=} [properties] Properties to set
             */
            function RequestDataSend(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestDataSend roomId.
             * @member {number} roomId
             * @memberof game_event.RequestDataSend
             * @instance
             */
            RequestDataSend.prototype.roomId = 0;
    
            /**
             * RequestDataSend data.
             * @member {Uint8Array} data
             * @memberof game_event.RequestDataSend
             * @instance
             */
            RequestDataSend.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new RequestDataSend instance using the specified properties.
             * @function create
             * @memberof game_event.RequestDataSend
             * @static
             * @param {game_event.IRequestDataSend=} [properties] Properties to set
             * @returns {game_event.RequestDataSend} RequestDataSend instance
             */
            RequestDataSend.create = function create(properties) {
                return new RequestDataSend(properties);
            };
    
            /**
             * Encodes the specified RequestDataSend message. Does not implicitly {@link game_event.RequestDataSend.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestDataSend
             * @static
             * @param {game_event.IRequestDataSend} message RequestDataSend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestDataSend.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified RequestDataSend message, length delimited. Does not implicitly {@link game_event.RequestDataSend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestDataSend
             * @static
             * @param {game_event.IRequestDataSend} message RequestDataSend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestDataSend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestDataSend message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestDataSend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestDataSend} RequestDataSend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestDataSend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestDataSend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestDataSend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestDataSend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestDataSend} RequestDataSend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestDataSend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestDataSend message.
             * @function verify
             * @memberof game_event.RequestDataSend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestDataSend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a RequestDataSend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestDataSend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestDataSend} RequestDataSend
             */
            RequestDataSend.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestDataSend)
                    return object;
                var message = new $root.game_event.RequestDataSend();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a RequestDataSend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestDataSend
             * @static
             * @param {game_event.RequestDataSend} message RequestDataSend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestDataSend.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this RequestDataSend to JSON.
             * @function toJSON
             * @memberof game_event.RequestDataSend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestDataSend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestDataSend;
        })();
    
        game_event.ResponseGameMessage = (function() {
    
            /**
             * Properties of a ResponseGameMessage.
             * @memberof game_event
             * @interface IResponseGameMessage
             * @property {number|null} [roomId] ResponseGameMessage roomId
             * @property {Uint8Array|null} [data] ResponseGameMessage data
             * @property {number|Long|null} [createTime] ResponseGameMessage createTime
             */
    
            /**
             * Constructs a new ResponseGameMessage.
             * @memberof game_event
             * @classdesc Represents a ResponseGameMessage.
             * @implements IResponseGameMessage
             * @constructor
             * @param {game_event.IResponseGameMessage=} [properties] Properties to set
             */
            function ResponseGameMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseGameMessage roomId.
             * @member {number} roomId
             * @memberof game_event.ResponseGameMessage
             * @instance
             */
            ResponseGameMessage.prototype.roomId = 0;
    
            /**
             * ResponseGameMessage data.
             * @member {Uint8Array} data
             * @memberof game_event.ResponseGameMessage
             * @instance
             */
            ResponseGameMessage.prototype.data = $util.newBuffer([]);
    
            /**
             * ResponseGameMessage createTime.
             * @member {number|Long} createTime
             * @memberof game_event.ResponseGameMessage
             * @instance
             */
            ResponseGameMessage.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new ResponseGameMessage instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {game_event.IResponseGameMessage=} [properties] Properties to set
             * @returns {game_event.ResponseGameMessage} ResponseGameMessage instance
             */
            ResponseGameMessage.create = function create(properties) {
                return new ResponseGameMessage(properties);
            };
    
            /**
             * Encodes the specified ResponseGameMessage message. Does not implicitly {@link game_event.ResponseGameMessage.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {game_event.IResponseGameMessage} message ResponseGameMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseGameMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createTime);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseGameMessage message, length delimited. Does not implicitly {@link game_event.ResponseGameMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {game_event.IResponseGameMessage} message ResponseGameMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseGameMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseGameMessage message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseGameMessage} ResponseGameMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseGameMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseGameMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    case 3:
                        message.createTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseGameMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseGameMessage} ResponseGameMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseGameMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseGameMessage message.
             * @function verify
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseGameMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                        return "createTime: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a ResponseGameMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseGameMessage} ResponseGameMessage
             */
            ResponseGameMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseGameMessage)
                    return object;
                var message = new $root.game_event.ResponseGameMessage();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.createTime != null)
                    if ($util.Long)
                        (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                    else if (typeof object.createTime === "string")
                        message.createTime = parseInt(object.createTime, 10);
                    else if (typeof object.createTime === "number")
                        message.createTime = object.createTime;
                    else if (typeof object.createTime === "object")
                        message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseGameMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseGameMessage
             * @static
             * @param {game_event.ResponseGameMessage} message ResponseGameMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseGameMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createTime = options.longs === String ? "0" : 0;
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (typeof message.createTime === "number")
                        object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                    else
                        object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
                return object;
            };
    
            /**
             * Converts this ResponseGameMessage to JSON.
             * @function toJSON
             * @memberof game_event.ResponseGameMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseGameMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseGameMessage;
        })();
    
        game_event.ResponseChatMessage = (function() {
    
            /**
             * Properties of a ResponseChatMessage.
             * @memberof game_event
             * @interface IResponseChatMessage
             * @property {number|null} [roomId] ResponseChatMessage roomId
             * @property {number|Long|null} [userId] ResponseChatMessage userId
             * @property {string|null} [message] ResponseChatMessage message
             */
    
            /**
             * Constructs a new ResponseChatMessage.
             * @memberof game_event
             * @classdesc Represents a ResponseChatMessage.
             * @implements IResponseChatMessage
             * @constructor
             * @param {game_event.IResponseChatMessage=} [properties] Properties to set
             */
            function ResponseChatMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseChatMessage roomId.
             * @member {number} roomId
             * @memberof game_event.ResponseChatMessage
             * @instance
             */
            ResponseChatMessage.prototype.roomId = 0;
    
            /**
             * ResponseChatMessage userId.
             * @member {number|Long} userId
             * @memberof game_event.ResponseChatMessage
             * @instance
             */
            ResponseChatMessage.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ResponseChatMessage message.
             * @member {string} message
             * @memberof game_event.ResponseChatMessage
             * @instance
             */
            ResponseChatMessage.prototype.message = "";
    
            /**
             * Creates a new ResponseChatMessage instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {game_event.IResponseChatMessage=} [properties] Properties to set
             * @returns {game_event.ResponseChatMessage} ResponseChatMessage instance
             */
            ResponseChatMessage.create = function create(properties) {
                return new ResponseChatMessage(properties);
            };
    
            /**
             * Encodes the specified ResponseChatMessage message. Does not implicitly {@link game_event.ResponseChatMessage.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {game_event.IResponseChatMessage} message ResponseChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseChatMessage message, length delimited. Does not implicitly {@link game_event.ResponseChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {game_event.IResponseChatMessage} message ResponseChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseChatMessage} ResponseChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseChatMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseChatMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.userId = reader.int64();
                        break;
                    case 3:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseChatMessage} ResponseChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseChatMessage message.
             * @function verify
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
    
            /**
             * Creates a ResponseChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseChatMessage} ResponseChatMessage
             */
            ResponseChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseChatMessage)
                    return object;
                var message = new $root.game_event.ResponseChatMessage();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseChatMessage
             * @static
             * @param {game_event.ResponseChatMessage} message ResponseChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.message = "";
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
    
            /**
             * Converts this ResponseChatMessage to JSON.
             * @function toJSON
             * @memberof game_event.ResponseChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseChatMessage;
        })();
    
        game_event.RequestSendChatMessage = (function() {
    
            /**
             * Properties of a RequestSendChatMessage.
             * @memberof game_event
             * @interface IRequestSendChatMessage
             * @property {number|null} [roomId] RequestSendChatMessage roomId
             * @property {string|null} [message] RequestSendChatMessage message
             * @property {Array.<number|Long>|null} [to] RequestSendChatMessage to
             * @property {boolean|null} [isPrivateChat] RequestSendChatMessage isPrivateChat
             */
    
            /**
             * Constructs a new RequestSendChatMessage.
             * @memberof game_event
             * @classdesc Represents a RequestSendChatMessage.
             * @implements IRequestSendChatMessage
             * @constructor
             * @param {game_event.IRequestSendChatMessage=} [properties] Properties to set
             */
            function RequestSendChatMessage(properties) {
                this.to = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestSendChatMessage roomId.
             * @member {number} roomId
             * @memberof game_event.RequestSendChatMessage
             * @instance
             */
            RequestSendChatMessage.prototype.roomId = 0;
    
            /**
             * RequestSendChatMessage message.
             * @member {string} message
             * @memberof game_event.RequestSendChatMessage
             * @instance
             */
            RequestSendChatMessage.prototype.message = "";
    
            /**
             * RequestSendChatMessage to.
             * @member {Array.<number|Long>} to
             * @memberof game_event.RequestSendChatMessage
             * @instance
             */
            RequestSendChatMessage.prototype.to = $util.emptyArray;
    
            /**
             * RequestSendChatMessage isPrivateChat.
             * @member {boolean} isPrivateChat
             * @memberof game_event.RequestSendChatMessage
             * @instance
             */
            RequestSendChatMessage.prototype.isPrivateChat = false;
    
            /**
             * Creates a new RequestSendChatMessage instance using the specified properties.
             * @function create
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {game_event.IRequestSendChatMessage=} [properties] Properties to set
             * @returns {game_event.RequestSendChatMessage} RequestSendChatMessage instance
             */
            RequestSendChatMessage.create = function create(properties) {
                return new RequestSendChatMessage(properties);
            };
    
            /**
             * Encodes the specified RequestSendChatMessage message. Does not implicitly {@link game_event.RequestSendChatMessage.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {game_event.IRequestSendChatMessage} message RequestSendChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestSendChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.to != null && message.to.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.to.length; ++i)
                        writer.int64(message.to[i]);
                    writer.ldelim();
                }
                if (message.isPrivateChat != null && Object.hasOwnProperty.call(message, "isPrivateChat"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isPrivateChat);
                return writer;
            };
    
            /**
             * Encodes the specified RequestSendChatMessage message, length delimited. Does not implicitly {@link game_event.RequestSendChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {game_event.IRequestSendChatMessage} message RequestSendChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestSendChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestSendChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestSendChatMessage} RequestSendChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestSendChatMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestSendChatMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        if (!(message.to && message.to.length))
                            message.to = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.to.push(reader.int64());
                        } else
                            message.to.push(reader.int64());
                        break;
                    case 4:
                        message.isPrivateChat = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestSendChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestSendChatMessage} RequestSendChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestSendChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestSendChatMessage message.
             * @function verify
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestSendChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.to != null && message.hasOwnProperty("to")) {
                    if (!Array.isArray(message.to))
                        return "to: array expected";
                    for (var i = 0; i < message.to.length; ++i)
                        if (!$util.isInteger(message.to[i]) && !(message.to[i] && $util.isInteger(message.to[i].low) && $util.isInteger(message.to[i].high)))
                            return "to: integer|Long[] expected";
                }
                if (message.isPrivateChat != null && message.hasOwnProperty("isPrivateChat"))
                    if (typeof message.isPrivateChat !== "boolean")
                        return "isPrivateChat: boolean expected";
                return null;
            };
    
            /**
             * Creates a RequestSendChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestSendChatMessage} RequestSendChatMessage
             */
            RequestSendChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestSendChatMessage)
                    return object;
                var message = new $root.game_event.RequestSendChatMessage();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.message != null)
                    message.message = String(object.message);
                if (object.to) {
                    if (!Array.isArray(object.to))
                        throw TypeError(".game_event.RequestSendChatMessage.to: array expected");
                    message.to = [];
                    for (var i = 0; i < object.to.length; ++i)
                        if ($util.Long)
                            (message.to[i] = $util.Long.fromValue(object.to[i])).unsigned = false;
                        else if (typeof object.to[i] === "string")
                            message.to[i] = parseInt(object.to[i], 10);
                        else if (typeof object.to[i] === "number")
                            message.to[i] = object.to[i];
                        else if (typeof object.to[i] === "object")
                            message.to[i] = new $util.LongBits(object.to[i].low >>> 0, object.to[i].high >>> 0).toNumber();
                }
                if (object.isPrivateChat != null)
                    message.isPrivateChat = Boolean(object.isPrivateChat);
                return message;
            };
    
            /**
             * Creates a plain object from a RequestSendChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestSendChatMessage
             * @static
             * @param {game_event.RequestSendChatMessage} message RequestSendChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestSendChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.to = [];
                if (options.defaults) {
                    object.roomId = 0;
                    object.message = "";
                    object.isPrivateChat = false;
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.to && message.to.length) {
                    object.to = [];
                    for (var j = 0; j < message.to.length; ++j)
                        if (typeof message.to[j] === "number")
                            object.to[j] = options.longs === String ? String(message.to[j]) : message.to[j];
                        else
                            object.to[j] = options.longs === String ? $util.Long.prototype.toString.call(message.to[j]) : options.longs === Number ? new $util.LongBits(message.to[j].low >>> 0, message.to[j].high >>> 0).toNumber() : message.to[j];
                }
                if (message.isPrivateChat != null && message.hasOwnProperty("isPrivateChat"))
                    object.isPrivateChat = message.isPrivateChat;
                return object;
            };
    
            /**
             * Converts this RequestSendChatMessage to JSON.
             * @function toJSON
             * @memberof game_event.RequestSendChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestSendChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestSendChatMessage;
        })();
    
        game_event.RoomType = (function() {
    
            /**
             * Properties of a RoomType.
             * @memberof game_event
             * @interface IRoomType
             * @property {number|Long|null} [bet] RoomType bet
             * @property {number|null} [ccu] RoomType ccu
             * @property {boolean|null} [joinable] RoomType joinable
             */
    
            /**
             * Constructs a new RoomType.
             * @memberof game_event
             * @classdesc Represents a RoomType.
             * @implements IRoomType
             * @constructor
             * @param {game_event.IRoomType=} [properties] Properties to set
             */
            function RoomType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RoomType bet.
             * @member {number|Long} bet
             * @memberof game_event.RoomType
             * @instance
             */
            RoomType.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * RoomType ccu.
             * @member {number} ccu
             * @memberof game_event.RoomType
             * @instance
             */
            RoomType.prototype.ccu = 0;
    
            /**
             * RoomType joinable.
             * @member {boolean} joinable
             * @memberof game_event.RoomType
             * @instance
             */
            RoomType.prototype.joinable = false;
    
            /**
             * Creates a new RoomType instance using the specified properties.
             * @function create
             * @memberof game_event.RoomType
             * @static
             * @param {game_event.IRoomType=} [properties] Properties to set
             * @returns {game_event.RoomType} RoomType instance
             */
            RoomType.create = function create(properties) {
                return new RoomType(properties);
            };
    
            /**
             * Encodes the specified RoomType message. Does not implicitly {@link game_event.RoomType.verify|verify} messages.
             * @function encode
             * @memberof game_event.RoomType
             * @static
             * @param {game_event.IRoomType} message RoomType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomType.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bet);
                if (message.ccu != null && Object.hasOwnProperty.call(message, "ccu"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ccu);
                if (message.joinable != null && Object.hasOwnProperty.call(message, "joinable"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.joinable);
                return writer;
            };
    
            /**
             * Encodes the specified RoomType message, length delimited. Does not implicitly {@link game_event.RoomType.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RoomType
             * @static
             * @param {game_event.IRoomType} message RoomType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomType.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RoomType message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RoomType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RoomType} RoomType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomType.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RoomType();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bet = reader.int64();
                        break;
                    case 2:
                        message.ccu = reader.int32();
                        break;
                    case 3:
                        message.joinable = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RoomType message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RoomType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RoomType} RoomType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomType.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RoomType message.
             * @function verify
             * @memberof game_event.RoomType
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomType.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                if (message.ccu != null && message.hasOwnProperty("ccu"))
                    if (!$util.isInteger(message.ccu))
                        return "ccu: integer expected";
                if (message.joinable != null && message.hasOwnProperty("joinable"))
                    if (typeof message.joinable !== "boolean")
                        return "joinable: boolean expected";
                return null;
            };
    
            /**
             * Creates a RoomType message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RoomType
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RoomType} RoomType
             */
            RoomType.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RoomType)
                    return object;
                var message = new $root.game_event.RoomType();
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                if (object.ccu != null)
                    message.ccu = object.ccu | 0;
                if (object.joinable != null)
                    message.joinable = Boolean(object.joinable);
                return message;
            };
    
            /**
             * Creates a plain object from a RoomType message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RoomType
             * @static
             * @param {game_event.RoomType} message RoomType
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomType.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                    object.ccu = 0;
                    object.joinable = false;
                }
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                if (message.ccu != null && message.hasOwnProperty("ccu"))
                    object.ccu = message.ccu;
                if (message.joinable != null && message.hasOwnProperty("joinable"))
                    object.joinable = message.joinable;
                return object;
            };
    
            /**
             * Converts this RoomType to JSON.
             * @function toJSON
             * @memberof game_event.RoomType
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomType.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RoomType;
        })();
    
        game_event.RequestRoomConfig = (function() {
    
            /**
             * Properties of a RequestRoomConfig.
             * @memberof game_event
             * @interface IRequestRoomConfig
             */
    
            /**
             * Constructs a new RequestRoomConfig.
             * @memberof game_event
             * @classdesc Represents a RequestRoomConfig.
             * @implements IRequestRoomConfig
             * @constructor
             * @param {game_event.IRequestRoomConfig=} [properties] Properties to set
             */
            function RequestRoomConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new RequestRoomConfig instance using the specified properties.
             * @function create
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {game_event.IRequestRoomConfig=} [properties] Properties to set
             * @returns {game_event.RequestRoomConfig} RequestRoomConfig instance
             */
            RequestRoomConfig.create = function create(properties) {
                return new RequestRoomConfig(properties);
            };
    
            /**
             * Encodes the specified RequestRoomConfig message. Does not implicitly {@link game_event.RequestRoomConfig.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {game_event.IRequestRoomConfig} message RequestRoomConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestRoomConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified RequestRoomConfig message, length delimited. Does not implicitly {@link game_event.RequestRoomConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {game_event.IRequestRoomConfig} message RequestRoomConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestRoomConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestRoomConfig message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestRoomConfig} RequestRoomConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestRoomConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestRoomConfig();
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
             * Decodes a RequestRoomConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestRoomConfig} RequestRoomConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestRoomConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestRoomConfig message.
             * @function verify
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestRoomConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a RequestRoomConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestRoomConfig} RequestRoomConfig
             */
            RequestRoomConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestRoomConfig)
                    return object;
                return new $root.game_event.RequestRoomConfig();
            };
    
            /**
             * Creates a plain object from a RequestRoomConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestRoomConfig
             * @static
             * @param {game_event.RequestRoomConfig} message RequestRoomConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestRoomConfig.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this RequestRoomConfig to JSON.
             * @function toJSON
             * @memberof game_event.RequestRoomConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestRoomConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestRoomConfig;
        })();
    
        game_event.ResponseRoomConfig = (function() {
    
            /**
             * Properties of a ResponseRoomConfig.
             * @memberof game_event
             * @interface IResponseRoomConfig
             * @property {Array.<game_event.IRoomType>|null} [roomTypes] ResponseRoomConfig roomTypes
             */
    
            /**
             * Constructs a new ResponseRoomConfig.
             * @memberof game_event
             * @classdesc Represents a ResponseRoomConfig.
             * @implements IResponseRoomConfig
             * @constructor
             * @param {game_event.IResponseRoomConfig=} [properties] Properties to set
             */
            function ResponseRoomConfig(properties) {
                this.roomTypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseRoomConfig roomTypes.
             * @member {Array.<game_event.IRoomType>} roomTypes
             * @memberof game_event.ResponseRoomConfig
             * @instance
             */
            ResponseRoomConfig.prototype.roomTypes = $util.emptyArray;
    
            /**
             * Creates a new ResponseRoomConfig instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {game_event.IResponseRoomConfig=} [properties] Properties to set
             * @returns {game_event.ResponseRoomConfig} ResponseRoomConfig instance
             */
            ResponseRoomConfig.create = function create(properties) {
                return new ResponseRoomConfig(properties);
            };
    
            /**
             * Encodes the specified ResponseRoomConfig message. Does not implicitly {@link game_event.ResponseRoomConfig.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {game_event.IResponseRoomConfig} message ResponseRoomConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRoomConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomTypes != null && message.roomTypes.length)
                    for (var i = 0; i < message.roomTypes.length; ++i)
                        $root.game_event.RoomType.encode(message.roomTypes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ResponseRoomConfig message, length delimited. Does not implicitly {@link game_event.ResponseRoomConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {game_event.IResponseRoomConfig} message ResponseRoomConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseRoomConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseRoomConfig message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseRoomConfig} ResponseRoomConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRoomConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseRoomConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.roomTypes && message.roomTypes.length))
                            message.roomTypes = [];
                        message.roomTypes.push($root.game_event.RoomType.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseRoomConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseRoomConfig} ResponseRoomConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseRoomConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseRoomConfig message.
             * @function verify
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseRoomConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomTypes != null && message.hasOwnProperty("roomTypes")) {
                    if (!Array.isArray(message.roomTypes))
                        return "roomTypes: array expected";
                    for (var i = 0; i < message.roomTypes.length; ++i) {
                        var error = $root.game_event.RoomType.verify(message.roomTypes[i]);
                        if (error)
                            return "roomTypes." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a ResponseRoomConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseRoomConfig} ResponseRoomConfig
             */
            ResponseRoomConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseRoomConfig)
                    return object;
                var message = new $root.game_event.ResponseRoomConfig();
                if (object.roomTypes) {
                    if (!Array.isArray(object.roomTypes))
                        throw TypeError(".game_event.ResponseRoomConfig.roomTypes: array expected");
                    message.roomTypes = [];
                    for (var i = 0; i < object.roomTypes.length; ++i) {
                        if (typeof object.roomTypes[i] !== "object")
                            throw TypeError(".game_event.ResponseRoomConfig.roomTypes: object expected");
                        message.roomTypes[i] = $root.game_event.RoomType.fromObject(object.roomTypes[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseRoomConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseRoomConfig
             * @static
             * @param {game_event.ResponseRoomConfig} message ResponseRoomConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseRoomConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.roomTypes = [];
                if (message.roomTypes && message.roomTypes.length) {
                    object.roomTypes = [];
                    for (var j = 0; j < message.roomTypes.length; ++j)
                        object.roomTypes[j] = $root.game_event.RoomType.toObject(message.roomTypes[j], options);
                }
                return object;
            };
    
            /**
             * Converts this ResponseRoomConfig to JSON.
             * @function toJSON
             * @memberof game_event.ResponseRoomConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseRoomConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseRoomConfig;
        })();
    
        game_event.ResponseUserJoined = (function() {
    
            /**
             * Properties of a ResponseUserJoined.
             * @memberof game_event
             * @interface IResponseUserJoined
             * @property {number|Long|null} [userId] ResponseUserJoined userId
             * @property {string|null} [name] ResponseUserJoined name
             * @property {number|Long|null} [chip] ResponseUserJoined chip
             * @property {number|null} [avatar] ResponseUserJoined avatar
             * @property {number|null} [seat] ResponseUserJoined seat
             * @property {number|null} [roomId] ResponseUserJoined roomId
             */
    
            /**
             * Constructs a new ResponseUserJoined.
             * @memberof game_event
             * @classdesc Represents a ResponseUserJoined.
             * @implements IResponseUserJoined
             * @constructor
             * @param {game_event.IResponseUserJoined=} [properties] Properties to set
             */
            function ResponseUserJoined(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseUserJoined userId.
             * @member {number|Long} userId
             * @memberof game_event.ResponseUserJoined
             * @instance
             */
            ResponseUserJoined.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ResponseUserJoined name.
             * @member {string} name
             * @memberof game_event.ResponseUserJoined
             * @instance
             */
            ResponseUserJoined.prototype.name = "";
    
            /**
             * ResponseUserJoined chip.
             * @member {number|Long} chip
             * @memberof game_event.ResponseUserJoined
             * @instance
             */
            ResponseUserJoined.prototype.chip = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ResponseUserJoined avatar.
             * @member {number} avatar
             * @memberof game_event.ResponseUserJoined
             * @instance
             */
            ResponseUserJoined.prototype.avatar = 0;
    
            /**
             * ResponseUserJoined seat.
             * @member {number} seat
             * @memberof game_event.ResponseUserJoined
             * @instance
             */
            ResponseUserJoined.prototype.seat = 0;
    
            /**
             * ResponseUserJoined roomId.
             * @member {number} roomId
             * @memberof game_event.ResponseUserJoined
             * @instance
             */
            ResponseUserJoined.prototype.roomId = 0;
    
            /**
             * Creates a new ResponseUserJoined instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {game_event.IResponseUserJoined=} [properties] Properties to set
             * @returns {game_event.ResponseUserJoined} ResponseUserJoined instance
             */
            ResponseUserJoined.create = function create(properties) {
                return new ResponseUserJoined(properties);
            };
    
            /**
             * Encodes the specified ResponseUserJoined message. Does not implicitly {@link game_event.ResponseUserJoined.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {game_event.IResponseUserJoined} message ResponseUserJoined message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseUserJoined.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.chip != null && Object.hasOwnProperty.call(message, "chip"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.chip);
                if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.avatar);
                if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seat);
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.roomId);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseUserJoined message, length delimited. Does not implicitly {@link game_event.ResponseUserJoined.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {game_event.IResponseUserJoined} message ResponseUserJoined message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseUserJoined.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseUserJoined message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseUserJoined} ResponseUserJoined
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseUserJoined.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseUserJoined();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int64();
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
                        message.roomId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseUserJoined message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseUserJoined} ResponseUserJoined
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseUserJoined.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseUserJoined message.
             * @function verify
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseUserJoined.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
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
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                return null;
            };
    
            /**
             * Creates a ResponseUserJoined message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseUserJoined} ResponseUserJoined
             */
            ResponseUserJoined.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseUserJoined)
                    return object;
                var message = new $root.game_event.ResponseUserJoined();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
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
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseUserJoined message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseUserJoined
             * @static
             * @param {game_event.ResponseUserJoined} message ResponseUserJoined
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseUserJoined.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.chip = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.chip = options.longs === String ? "0" : 0;
                    object.avatar = 0;
                    object.seat = 0;
                    object.roomId = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
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
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                return object;
            };
    
            /**
             * Converts this ResponseUserJoined to JSON.
             * @function toJSON
             * @memberof game_event.ResponseUserJoined
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseUserJoined.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseUserJoined;
        })();
    
        game_event.ResponseUserLeft = (function() {
    
            /**
             * Properties of a ResponseUserLeft.
             * @memberof game_event
             * @interface IResponseUserLeft
             * @property {number|Long|null} [userId] ResponseUserLeft userId
             * @property {boolean|null} [disconnect] ResponseUserLeft disconnect
             * @property {number|null} [roomId] ResponseUserLeft roomId
             */
    
            /**
             * Constructs a new ResponseUserLeft.
             * @memberof game_event
             * @classdesc Represents a ResponseUserLeft.
             * @implements IResponseUserLeft
             * @constructor
             * @param {game_event.IResponseUserLeft=} [properties] Properties to set
             */
            function ResponseUserLeft(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseUserLeft userId.
             * @member {number|Long} userId
             * @memberof game_event.ResponseUserLeft
             * @instance
             */
            ResponseUserLeft.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ResponseUserLeft disconnect.
             * @member {boolean} disconnect
             * @memberof game_event.ResponseUserLeft
             * @instance
             */
            ResponseUserLeft.prototype.disconnect = false;
    
            /**
             * ResponseUserLeft roomId.
             * @member {number} roomId
             * @memberof game_event.ResponseUserLeft
             * @instance
             */
            ResponseUserLeft.prototype.roomId = 0;
    
            /**
             * Creates a new ResponseUserLeft instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {game_event.IResponseUserLeft=} [properties] Properties to set
             * @returns {game_event.ResponseUserLeft} ResponseUserLeft instance
             */
            ResponseUserLeft.create = function create(properties) {
                return new ResponseUserLeft(properties);
            };
    
            /**
             * Encodes the specified ResponseUserLeft message. Does not implicitly {@link game_event.ResponseUserLeft.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {game_event.IResponseUserLeft} message ResponseUserLeft message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseUserLeft.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.disconnect != null && Object.hasOwnProperty.call(message, "disconnect"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.disconnect);
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseUserLeft message, length delimited. Does not implicitly {@link game_event.ResponseUserLeft.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {game_event.IResponseUserLeft} message ResponseUserLeft message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseUserLeft.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseUserLeft message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseUserLeft} ResponseUserLeft
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseUserLeft.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseUserLeft();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int64();
                        break;
                    case 2:
                        message.disconnect = reader.bool();
                        break;
                    case 3:
                        message.roomId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseUserLeft message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseUserLeft} ResponseUserLeft
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseUserLeft.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseUserLeft message.
             * @function verify
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseUserLeft.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.disconnect != null && message.hasOwnProperty("disconnect"))
                    if (typeof message.disconnect !== "boolean")
                        return "disconnect: boolean expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                return null;
            };
    
            /**
             * Creates a ResponseUserLeft message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseUserLeft} ResponseUserLeft
             */
            ResponseUserLeft.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseUserLeft)
                    return object;
                var message = new $root.game_event.ResponseUserLeft();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.disconnect != null)
                    message.disconnect = Boolean(object.disconnect);
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseUserLeft message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseUserLeft
             * @static
             * @param {game_event.ResponseUserLeft} message ResponseUserLeft
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseUserLeft.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.disconnect = false;
                    object.roomId = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.disconnect != null && message.hasOwnProperty("disconnect"))
                    object.disconnect = message.disconnect;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                return object;
            };
    
            /**
             * Converts this ResponseUserLeft to JSON.
             * @function toJSON
             * @memberof game_event.ResponseUserLeft
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseUserLeft.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseUserLeft;
        })();
    
        game_event.RequestAutoLeave = (function() {
    
            /**
             * Properties of a RequestAutoLeave.
             * @memberof game_event
             * @interface IRequestAutoLeave
             * @property {number|null} [roomId] RequestAutoLeave roomId
             */
    
            /**
             * Constructs a new RequestAutoLeave.
             * @memberof game_event
             * @classdesc Represents a RequestAutoLeave.
             * @implements IRequestAutoLeave
             * @constructor
             * @param {game_event.IRequestAutoLeave=} [properties] Properties to set
             */
            function RequestAutoLeave(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestAutoLeave roomId.
             * @member {number} roomId
             * @memberof game_event.RequestAutoLeave
             * @instance
             */
            RequestAutoLeave.prototype.roomId = 0;
    
            /**
             * Creates a new RequestAutoLeave instance using the specified properties.
             * @function create
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {game_event.IRequestAutoLeave=} [properties] Properties to set
             * @returns {game_event.RequestAutoLeave} RequestAutoLeave instance
             */
            RequestAutoLeave.create = function create(properties) {
                return new RequestAutoLeave(properties);
            };
    
            /**
             * Encodes the specified RequestAutoLeave message. Does not implicitly {@link game_event.RequestAutoLeave.verify|verify} messages.
             * @function encode
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {game_event.IRequestAutoLeave} message RequestAutoLeave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestAutoLeave.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                return writer;
            };
    
            /**
             * Encodes the specified RequestAutoLeave message, length delimited. Does not implicitly {@link game_event.RequestAutoLeave.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {game_event.IRequestAutoLeave} message RequestAutoLeave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestAutoLeave.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestAutoLeave message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.RequestAutoLeave} RequestAutoLeave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestAutoLeave.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.RequestAutoLeave();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestAutoLeave message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.RequestAutoLeave} RequestAutoLeave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestAutoLeave.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestAutoLeave message.
             * @function verify
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestAutoLeave.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                return null;
            };
    
            /**
             * Creates a RequestAutoLeave message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.RequestAutoLeave} RequestAutoLeave
             */
            RequestAutoLeave.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.RequestAutoLeave)
                    return object;
                var message = new $root.game_event.RequestAutoLeave();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RequestAutoLeave message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.RequestAutoLeave
             * @static
             * @param {game_event.RequestAutoLeave} message RequestAutoLeave
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestAutoLeave.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.roomId = 0;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                return object;
            };
    
            /**
             * Converts this RequestAutoLeave to JSON.
             * @function toJSON
             * @memberof game_event.RequestAutoLeave
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestAutoLeave.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestAutoLeave;
        })();
    
        game_event.ResponseAutoLeave = (function() {
    
            /**
             * Properties of a ResponseAutoLeave.
             * @memberof game_event
             * @interface IResponseAutoLeave
             * @property {number|Long|null} [userId] ResponseAutoLeave userId
             * @property {boolean|null} [autoExit] ResponseAutoLeave autoExit
             * @property {number|null} [roomId] ResponseAutoLeave roomId
             */
    
            /**
             * Constructs a new ResponseAutoLeave.
             * @memberof game_event
             * @classdesc Represents a ResponseAutoLeave.
             * @implements IResponseAutoLeave
             * @constructor
             * @param {game_event.IResponseAutoLeave=} [properties] Properties to set
             */
            function ResponseAutoLeave(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResponseAutoLeave userId.
             * @member {number|Long} userId
             * @memberof game_event.ResponseAutoLeave
             * @instance
             */
            ResponseAutoLeave.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ResponseAutoLeave autoExit.
             * @member {boolean} autoExit
             * @memberof game_event.ResponseAutoLeave
             * @instance
             */
            ResponseAutoLeave.prototype.autoExit = false;
    
            /**
             * ResponseAutoLeave roomId.
             * @member {number} roomId
             * @memberof game_event.ResponseAutoLeave
             * @instance
             */
            ResponseAutoLeave.prototype.roomId = 0;
    
            /**
             * Creates a new ResponseAutoLeave instance using the specified properties.
             * @function create
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {game_event.IResponseAutoLeave=} [properties] Properties to set
             * @returns {game_event.ResponseAutoLeave} ResponseAutoLeave instance
             */
            ResponseAutoLeave.create = function create(properties) {
                return new ResponseAutoLeave(properties);
            };
    
            /**
             * Encodes the specified ResponseAutoLeave message. Does not implicitly {@link game_event.ResponseAutoLeave.verify|verify} messages.
             * @function encode
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {game_event.IResponseAutoLeave} message ResponseAutoLeave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseAutoLeave.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                if (message.autoExit != null && Object.hasOwnProperty.call(message, "autoExit"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.autoExit);
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
                return writer;
            };
    
            /**
             * Encodes the specified ResponseAutoLeave message, length delimited. Does not implicitly {@link game_event.ResponseAutoLeave.verify|verify} messages.
             * @function encodeDelimited
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {game_event.IResponseAutoLeave} message ResponseAutoLeave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseAutoLeave.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResponseAutoLeave message from the specified reader or buffer.
             * @function decode
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {game_event.ResponseAutoLeave} ResponseAutoLeave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseAutoLeave.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game_event.ResponseAutoLeave();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int64();
                        break;
                    case 2:
                        message.autoExit = reader.bool();
                        break;
                    case 3:
                        message.roomId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResponseAutoLeave message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {game_event.ResponseAutoLeave} ResponseAutoLeave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseAutoLeave.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResponseAutoLeave message.
             * @function verify
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseAutoLeave.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.autoExit != null && message.hasOwnProperty("autoExit"))
                    if (typeof message.autoExit !== "boolean")
                        return "autoExit: boolean expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                return null;
            };
    
            /**
             * Creates a ResponseAutoLeave message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {game_event.ResponseAutoLeave} ResponseAutoLeave
             */
            ResponseAutoLeave.fromObject = function fromObject(object) {
                if (object instanceof $root.game_event.ResponseAutoLeave)
                    return object;
                var message = new $root.game_event.ResponseAutoLeave();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                if (object.autoExit != null)
                    message.autoExit = Boolean(object.autoExit);
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResponseAutoLeave message. Also converts values to other types if specified.
             * @function toObject
             * @memberof game_event.ResponseAutoLeave
             * @static
             * @param {game_event.ResponseAutoLeave} message ResponseAutoLeave
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseAutoLeave.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.autoExit = false;
                    object.roomId = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                if (message.autoExit != null && message.hasOwnProperty("autoExit"))
                    object.autoExit = message.autoExit;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                return object;
            };
    
            /**
             * Converts this ResponseAutoLeave to JSON.
             * @function toJSON
             * @memberof game_event.ResponseAutoLeave
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseAutoLeave.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResponseAutoLeave;
        })();
    
        return game_event;
    })();

    return $root;
})(protobuf).game_event;
