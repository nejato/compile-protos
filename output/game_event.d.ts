declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace game_event. */
export namespace game_event {

    /** Properties of a Request. */
    interface IRequest {

        /** Request leaveRoom */
        leaveRoom?: (game_event.IRequestLeaveRoom|null);

        /** Request sendChatMessage */
        sendChatMessage?: (game_event.IRequestSendChatMessage|null);

        /** Request createRoom */
        createRoom?: (game_event.IRequestCreateRoom|null);

        /** Request joinRoom */
        joinRoom?: (game_event.IRequestJoinRoom|null);

        /** Request joinAnyRoom */
        joinAnyRoom?: (game_event.IRequestJoinAnyRoom|null);

        /** Request getRoomList */
        getRoomList?: (game_event.IRequestGetRoomList|null);

        /** Request dataSend */
        dataSend?: (game_event.IRequestDataSend|null);

        /** Request roomConfig */
        roomConfig?: (game_event.IRequestRoomConfig|null);

        /** Request autoLeave */
        autoLeave?: (game_event.IRequestAutoLeave|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequest);

        /** Request leaveRoom. */
        public leaveRoom?: (game_event.IRequestLeaveRoom|null);

        /** Request sendChatMessage. */
        public sendChatMessage?: (game_event.IRequestSendChatMessage|null);

        /** Request createRoom. */
        public createRoom?: (game_event.IRequestCreateRoom|null);

        /** Request joinRoom. */
        public joinRoom?: (game_event.IRequestJoinRoom|null);

        /** Request joinAnyRoom. */
        public joinAnyRoom?: (game_event.IRequestJoinAnyRoom|null);

        /** Request getRoomList. */
        public getRoomList?: (game_event.IRequestGetRoomList|null);

        /** Request dataSend. */
        public dataSend?: (game_event.IRequestDataSend|null);

        /** Request roomConfig. */
        public roomConfig?: (game_event.IRequestRoomConfig|null);

        /** Request autoLeave. */
        public autoLeave?: (game_event.IRequestAutoLeave|null);

        /** Request message. */
        public message?: ("leaveRoom"|"sendChatMessage"|"createRoom"|"joinRoom"|"joinAnyRoom"|"getRoomList"|"dataSend"|"roomConfig"|"autoLeave");

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: game_event.IRequest): game_event.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link game_event.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link game_event.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): game_event.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (game_event.IResponseError|null);

        /** Response gameMessage */
        gameMessage?: (game_event.IResponseGameMessage|null);

        /** Response chatMessage */
        chatMessage?: (game_event.IResponseChatMessage|null);

        /** Response roomList */
        roomList?: (game_event.IResponseRoomList|null);

        /** Response roomConfig */
        roomConfig?: (game_event.IResponseRoomConfig|null);

        /** Response autoLeave */
        autoLeave?: (game_event.IResponseAutoLeave|null);

        /** Response userJoined */
        userJoined?: (game_event.IResponseUserJoined|null);

        /** Response userLeft */
        userLeft?: (game_event.IResponseUserLeft|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponse);

        /** Response error. */
        public error?: (game_event.IResponseError|null);

        /** Response gameMessage. */
        public gameMessage?: (game_event.IResponseGameMessage|null);

        /** Response chatMessage. */
        public chatMessage?: (game_event.IResponseChatMessage|null);

        /** Response roomList. */
        public roomList?: (game_event.IResponseRoomList|null);

        /** Response roomConfig. */
        public roomConfig?: (game_event.IResponseRoomConfig|null);

        /** Response autoLeave. */
        public autoLeave?: (game_event.IResponseAutoLeave|null);

        /** Response userJoined. */
        public userJoined?: (game_event.IResponseUserJoined|null);

        /** Response userLeft. */
        public userLeft?: (game_event.IResponseUserLeft|null);

        /** Response message. */
        public message?: ("error"|"gameMessage"|"chatMessage"|"roomList"|"roomConfig"|"autoLeave"|"userJoined"|"userLeft");

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: game_event.IResponse): game_event.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link game_event.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link game_event.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): game_event.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseError. */
    interface IResponseError {

        /** ResponseError code */
        code?: (number|null);
    }

    /** Represents a ResponseError. */
    class ResponseError implements IResponseError {

        /**
         * Constructs a new ResponseError.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseError);

        /** ResponseError code. */
        public code: number;

        /**
         * Creates a new ResponseError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseError instance
         */
        public static create(properties?: game_event.IResponseError): game_event.ResponseError;

        /**
         * Encodes the specified ResponseError message. Does not implicitly {@link game_event.ResponseError.verify|verify} messages.
         * @param message ResponseError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseError message, length delimited. Does not implicitly {@link game_event.ResponseError.verify|verify} messages.
         * @param message ResponseError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseError;

        /**
         * Decodes a ResponseError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseError;

        /**
         * Verifies a ResponseError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseError
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseError;

        /**
         * Creates a plain object from a ResponseError message. Also converts values to other types if specified.
         * @param message ResponseError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestJoinRoom. */
    interface IRequestJoinRoom {

        /** RequestJoinRoom roomId */
        roomId?: (number|null);

        /** RequestJoinRoom password */
        password?: (string|null);

        /** RequestJoinRoom isViewer */
        isViewer?: (boolean|null);
    }

    /** Represents a RequestJoinRoom. */
    class RequestJoinRoom implements IRequestJoinRoom {

        /**
         * Constructs a new RequestJoinRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestJoinRoom);

        /** RequestJoinRoom roomId. */
        public roomId: number;

        /** RequestJoinRoom password. */
        public password: string;

        /** RequestJoinRoom isViewer. */
        public isViewer: boolean;

        /**
         * Creates a new RequestJoinRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestJoinRoom instance
         */
        public static create(properties?: game_event.IRequestJoinRoom): game_event.RequestJoinRoom;

        /**
         * Encodes the specified RequestJoinRoom message. Does not implicitly {@link game_event.RequestJoinRoom.verify|verify} messages.
         * @param message RequestJoinRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestJoinRoom message, length delimited. Does not implicitly {@link game_event.RequestJoinRoom.verify|verify} messages.
         * @param message RequestJoinRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestJoinRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestJoinRoom;

        /**
         * Decodes a RequestJoinRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestJoinRoom;

        /**
         * Verifies a RequestJoinRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestJoinRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestJoinRoom
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestJoinRoom;

        /**
         * Creates a plain object from a RequestJoinRoom message. Also converts values to other types if specified.
         * @param message RequestJoinRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestJoinRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestJoinRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCreateRoom. */
    interface IRequestCreateRoom {

        /** RequestCreateRoom bet */
        bet?: (number|Long|null);

        /** RequestCreateRoom password */
        password?: (string|null);

        /** RequestCreateRoom maxPlayers */
        maxPlayers?: (number|null);
    }

    /** Represents a RequestCreateRoom. */
    class RequestCreateRoom implements IRequestCreateRoom {

        /**
         * Constructs a new RequestCreateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestCreateRoom);

        /** RequestCreateRoom bet. */
        public bet: (number|Long);

        /** RequestCreateRoom password. */
        public password: string;

        /** RequestCreateRoom maxPlayers. */
        public maxPlayers: number;

        /**
         * Creates a new RequestCreateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCreateRoom instance
         */
        public static create(properties?: game_event.IRequestCreateRoom): game_event.RequestCreateRoom;

        /**
         * Encodes the specified RequestCreateRoom message. Does not implicitly {@link game_event.RequestCreateRoom.verify|verify} messages.
         * @param message RequestCreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestCreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCreateRoom message, length delimited. Does not implicitly {@link game_event.RequestCreateRoom.verify|verify} messages.
         * @param message RequestCreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestCreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCreateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestCreateRoom;

        /**
         * Decodes a RequestCreateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestCreateRoom;

        /**
         * Verifies a RequestCreateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCreateRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCreateRoom
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestCreateRoom;

        /**
         * Creates a plain object from a RequestCreateRoom message. Also converts values to other types if specified.
         * @param message RequestCreateRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestCreateRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCreateRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestJoinAnyRoom. */
    interface IRequestJoinAnyRoom {

        /** RequestJoinAnyRoom bet */
        bet?: (number|Long|null);
    }

    /** Represents a RequestJoinAnyRoom. */
    class RequestJoinAnyRoom implements IRequestJoinAnyRoom {

        /**
         * Constructs a new RequestJoinAnyRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestJoinAnyRoom);

        /** RequestJoinAnyRoom bet. */
        public bet: (number|Long);

        /**
         * Creates a new RequestJoinAnyRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestJoinAnyRoom instance
         */
        public static create(properties?: game_event.IRequestJoinAnyRoom): game_event.RequestJoinAnyRoom;

        /**
         * Encodes the specified RequestJoinAnyRoom message. Does not implicitly {@link game_event.RequestJoinAnyRoom.verify|verify} messages.
         * @param message RequestJoinAnyRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestJoinAnyRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestJoinAnyRoom message, length delimited. Does not implicitly {@link game_event.RequestJoinAnyRoom.verify|verify} messages.
         * @param message RequestJoinAnyRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestJoinAnyRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestJoinAnyRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestJoinAnyRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestJoinAnyRoom;

        /**
         * Decodes a RequestJoinAnyRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestJoinAnyRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestJoinAnyRoom;

        /**
         * Verifies a RequestJoinAnyRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestJoinAnyRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestJoinAnyRoom
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestJoinAnyRoom;

        /**
         * Creates a plain object from a RequestJoinAnyRoom message. Also converts values to other types if specified.
         * @param message RequestJoinAnyRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestJoinAnyRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestJoinAnyRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGetRoomList. */
    interface IRequestGetRoomList {

        /** RequestGetRoomList bet */
        bet?: (number|Long|null);
    }

    /** Represents a RequestGetRoomList. */
    class RequestGetRoomList implements IRequestGetRoomList {

        /**
         * Constructs a new RequestGetRoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestGetRoomList);

        /** RequestGetRoomList bet. */
        public bet: (number|Long);

        /**
         * Creates a new RequestGetRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGetRoomList instance
         */
        public static create(properties?: game_event.IRequestGetRoomList): game_event.RequestGetRoomList;

        /**
         * Encodes the specified RequestGetRoomList message. Does not implicitly {@link game_event.RequestGetRoomList.verify|verify} messages.
         * @param message RequestGetRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestGetRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGetRoomList message, length delimited. Does not implicitly {@link game_event.RequestGetRoomList.verify|verify} messages.
         * @param message RequestGetRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestGetRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGetRoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGetRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestGetRoomList;

        /**
         * Decodes a RequestGetRoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGetRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestGetRoomList;

        /**
         * Verifies a RequestGetRoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGetRoomList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGetRoomList
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestGetRoomList;

        /**
         * Creates a plain object from a RequestGetRoomList message. Also converts values to other types if specified.
         * @param message RequestGetRoomList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestGetRoomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGetRoomList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Room. */
    interface IRoom {

        /** Room roomId */
        roomId?: (number|null);

        /** Room isPrivate */
        isPrivate?: (boolean|null);

        /** Room bet */
        bet?: (number|Long|null);

        /** Room createTime */
        createTime?: (number|Long|null);

        /** Room metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRoom);

        /** Room roomId. */
        public roomId: number;

        /** Room isPrivate. */
        public isPrivate: boolean;

        /** Room bet. */
        public bet: (number|Long);

        /** Room createTime. */
        public createTime: (number|Long);

        /** Room metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: game_event.IRoom): game_event.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link game_event.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link game_event.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Room
         */
        public static fromObject(object: { [k: string]: any }): game_event.Room;

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @param message Room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseRoomList. */
    interface IResponseRoomList {

        /** ResponseRoomList bet */
        bet?: (number|Long|null);

        /** ResponseRoomList rooms */
        rooms?: (game_event.IRoom[]|null);
    }

    /** Represents a ResponseRoomList. */
    class ResponseRoomList implements IResponseRoomList {

        /**
         * Constructs a new ResponseRoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseRoomList);

        /** ResponseRoomList bet. */
        public bet: (number|Long);

        /** ResponseRoomList rooms. */
        public rooms: game_event.IRoom[];

        /**
         * Creates a new ResponseRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseRoomList instance
         */
        public static create(properties?: game_event.IResponseRoomList): game_event.ResponseRoomList;

        /**
         * Encodes the specified ResponseRoomList message. Does not implicitly {@link game_event.ResponseRoomList.verify|verify} messages.
         * @param message ResponseRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseRoomList message, length delimited. Does not implicitly {@link game_event.ResponseRoomList.verify|verify} messages.
         * @param message ResponseRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseRoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseRoomList;

        /**
         * Decodes a ResponseRoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseRoomList;

        /**
         * Verifies a ResponseRoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseRoomList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseRoomList
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseRoomList;

        /**
         * Creates a plain object from a ResponseRoomList message. Also converts values to other types if specified.
         * @param message ResponseRoomList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseRoomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseRoomList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLeaveRoom. */
    interface IRequestLeaveRoom {

        /** RequestLeaveRoom roomId */
        roomId?: (number|null);
    }

    /** Represents a RequestLeaveRoom. */
    class RequestLeaveRoom implements IRequestLeaveRoom {

        /**
         * Constructs a new RequestLeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestLeaveRoom);

        /** RequestLeaveRoom roomId. */
        public roomId: number;

        /**
         * Creates a new RequestLeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLeaveRoom instance
         */
        public static create(properties?: game_event.IRequestLeaveRoom): game_event.RequestLeaveRoom;

        /**
         * Encodes the specified RequestLeaveRoom message. Does not implicitly {@link game_event.RequestLeaveRoom.verify|verify} messages.
         * @param message RequestLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestLeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLeaveRoom message, length delimited. Does not implicitly {@link game_event.RequestLeaveRoom.verify|verify} messages.
         * @param message RequestLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestLeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestLeaveRoom;

        /**
         * Decodes a RequestLeaveRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestLeaveRoom;

        /**
         * Verifies a RequestLeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLeaveRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLeaveRoom
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestLeaveRoom;

        /**
         * Creates a plain object from a RequestLeaveRoom message. Also converts values to other types if specified.
         * @param message RequestLeaveRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestLeaveRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLeaveRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDataSend. */
    interface IRequestDataSend {

        /** RequestDataSend roomId */
        roomId?: (number|null);

        /** RequestDataSend data */
        data?: (Uint8Array|null);
    }

    /** Represents a RequestDataSend. */
    class RequestDataSend implements IRequestDataSend {

        /**
         * Constructs a new RequestDataSend.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestDataSend);

        /** RequestDataSend roomId. */
        public roomId: number;

        /** RequestDataSend data. */
        public data: Uint8Array;

        /**
         * Creates a new RequestDataSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDataSend instance
         */
        public static create(properties?: game_event.IRequestDataSend): game_event.RequestDataSend;

        /**
         * Encodes the specified RequestDataSend message. Does not implicitly {@link game_event.RequestDataSend.verify|verify} messages.
         * @param message RequestDataSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestDataSend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDataSend message, length delimited. Does not implicitly {@link game_event.RequestDataSend.verify|verify} messages.
         * @param message RequestDataSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestDataSend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDataSend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDataSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestDataSend;

        /**
         * Decodes a RequestDataSend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDataSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestDataSend;

        /**
         * Verifies a RequestDataSend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDataSend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDataSend
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestDataSend;

        /**
         * Creates a plain object from a RequestDataSend message. Also converts values to other types if specified.
         * @param message RequestDataSend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestDataSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDataSend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseGameMessage. */
    interface IResponseGameMessage {

        /** ResponseGameMessage roomId */
        roomId?: (number|null);

        /** ResponseGameMessage data */
        data?: (Uint8Array|null);

        /** ResponseGameMessage createTime */
        createTime?: (number|Long|null);
    }

    /** Represents a ResponseGameMessage. */
    class ResponseGameMessage implements IResponseGameMessage {

        /**
         * Constructs a new ResponseGameMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseGameMessage);

        /** ResponseGameMessage roomId. */
        public roomId: number;

        /** ResponseGameMessage data. */
        public data: Uint8Array;

        /** ResponseGameMessage createTime. */
        public createTime: (number|Long);

        /**
         * Creates a new ResponseGameMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseGameMessage instance
         */
        public static create(properties?: game_event.IResponseGameMessage): game_event.ResponseGameMessage;

        /**
         * Encodes the specified ResponseGameMessage message. Does not implicitly {@link game_event.ResponseGameMessage.verify|verify} messages.
         * @param message ResponseGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseGameMessage message, length delimited. Does not implicitly {@link game_event.ResponseGameMessage.verify|verify} messages.
         * @param message ResponseGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseGameMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseGameMessage;

        /**
         * Decodes a ResponseGameMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseGameMessage;

        /**
         * Verifies a ResponseGameMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseGameMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseGameMessage
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseGameMessage;

        /**
         * Creates a plain object from a ResponseGameMessage message. Also converts values to other types if specified.
         * @param message ResponseGameMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseGameMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseGameMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseChatMessage. */
    interface IResponseChatMessage {

        /** ResponseChatMessage roomId */
        roomId?: (number|null);

        /** ResponseChatMessage userId */
        userId?: (number|Long|null);

        /** ResponseChatMessage message */
        message?: (string|null);
    }

    /** Represents a ResponseChatMessage. */
    class ResponseChatMessage implements IResponseChatMessage {

        /**
         * Constructs a new ResponseChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseChatMessage);

        /** ResponseChatMessage roomId. */
        public roomId: number;

        /** ResponseChatMessage userId. */
        public userId: (number|Long);

        /** ResponseChatMessage message. */
        public message: string;

        /**
         * Creates a new ResponseChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseChatMessage instance
         */
        public static create(properties?: game_event.IResponseChatMessage): game_event.ResponseChatMessage;

        /**
         * Encodes the specified ResponseChatMessage message. Does not implicitly {@link game_event.ResponseChatMessage.verify|verify} messages.
         * @param message ResponseChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseChatMessage message, length delimited. Does not implicitly {@link game_event.ResponseChatMessage.verify|verify} messages.
         * @param message ResponseChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseChatMessage;

        /**
         * Decodes a ResponseChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseChatMessage;

        /**
         * Verifies a ResponseChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseChatMessage
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseChatMessage;

        /**
         * Creates a plain object from a ResponseChatMessage message. Also converts values to other types if specified.
         * @param message ResponseChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSendChatMessage. */
    interface IRequestSendChatMessage {

        /** RequestSendChatMessage roomId */
        roomId?: (number|null);

        /** RequestSendChatMessage message */
        message?: (string|null);

        /** RequestSendChatMessage to */
        to?: ((number|Long)[]|null);

        /** RequestSendChatMessage isPrivateChat */
        isPrivateChat?: (boolean|null);
    }

    /** Represents a RequestSendChatMessage. */
    class RequestSendChatMessage implements IRequestSendChatMessage {

        /**
         * Constructs a new RequestSendChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestSendChatMessage);

        /** RequestSendChatMessage roomId. */
        public roomId: number;

        /** RequestSendChatMessage message. */
        public message: string;

        /** RequestSendChatMessage to. */
        public to: (number|Long)[];

        /** RequestSendChatMessage isPrivateChat. */
        public isPrivateChat: boolean;

        /**
         * Creates a new RequestSendChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSendChatMessage instance
         */
        public static create(properties?: game_event.IRequestSendChatMessage): game_event.RequestSendChatMessage;

        /**
         * Encodes the specified RequestSendChatMessage message. Does not implicitly {@link game_event.RequestSendChatMessage.verify|verify} messages.
         * @param message RequestSendChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestSendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSendChatMessage message, length delimited. Does not implicitly {@link game_event.RequestSendChatMessage.verify|verify} messages.
         * @param message RequestSendChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestSendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSendChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestSendChatMessage;

        /**
         * Decodes a RequestSendChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSendChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestSendChatMessage;

        /**
         * Verifies a RequestSendChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSendChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSendChatMessage
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestSendChatMessage;

        /**
         * Creates a plain object from a RequestSendChatMessage message. Also converts values to other types if specified.
         * @param message RequestSendChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestSendChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSendChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomType. */
    interface IRoomType {

        /** RoomType bet */
        bet?: (number|Long|null);

        /** RoomType ccu */
        ccu?: (number|null);

        /** RoomType joinable */
        joinable?: (boolean|null);
    }

    /** Represents a RoomType. */
    class RoomType implements IRoomType {

        /**
         * Constructs a new RoomType.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRoomType);

        /** RoomType bet. */
        public bet: (number|Long);

        /** RoomType ccu. */
        public ccu: number;

        /** RoomType joinable. */
        public joinable: boolean;

        /**
         * Creates a new RoomType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomType instance
         */
        public static create(properties?: game_event.IRoomType): game_event.RoomType;

        /**
         * Encodes the specified RoomType message. Does not implicitly {@link game_event.RoomType.verify|verify} messages.
         * @param message RoomType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRoomType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomType message, length delimited. Does not implicitly {@link game_event.RoomType.verify|verify} messages.
         * @param message RoomType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRoomType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RoomType;

        /**
         * Decodes a RoomType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RoomType;

        /**
         * Verifies a RoomType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomType
         */
        public static fromObject(object: { [k: string]: any }): game_event.RoomType;

        /**
         * Creates a plain object from a RoomType message. Also converts values to other types if specified.
         * @param message RoomType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RoomType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestRoomConfig. */
    interface IRequestRoomConfig {
    }

    /** Represents a RequestRoomConfig. */
    class RequestRoomConfig implements IRequestRoomConfig {

        /**
         * Constructs a new RequestRoomConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestRoomConfig);

        /**
         * Creates a new RequestRoomConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRoomConfig instance
         */
        public static create(properties?: game_event.IRequestRoomConfig): game_event.RequestRoomConfig;

        /**
         * Encodes the specified RequestRoomConfig message. Does not implicitly {@link game_event.RequestRoomConfig.verify|verify} messages.
         * @param message RequestRoomConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestRoomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRoomConfig message, length delimited. Does not implicitly {@link game_event.RequestRoomConfig.verify|verify} messages.
         * @param message RequestRoomConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestRoomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRoomConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRoomConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestRoomConfig;

        /**
         * Decodes a RequestRoomConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRoomConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestRoomConfig;

        /**
         * Verifies a RequestRoomConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRoomConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRoomConfig
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestRoomConfig;

        /**
         * Creates a plain object from a RequestRoomConfig message. Also converts values to other types if specified.
         * @param message RequestRoomConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestRoomConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRoomConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseRoomConfig. */
    interface IResponseRoomConfig {

        /** ResponseRoomConfig roomTypes */
        roomTypes?: (game_event.IRoomType[]|null);
    }

    /** Represents a ResponseRoomConfig. */
    class ResponseRoomConfig implements IResponseRoomConfig {

        /**
         * Constructs a new ResponseRoomConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseRoomConfig);

        /** ResponseRoomConfig roomTypes. */
        public roomTypes: game_event.IRoomType[];

        /**
         * Creates a new ResponseRoomConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseRoomConfig instance
         */
        public static create(properties?: game_event.IResponseRoomConfig): game_event.ResponseRoomConfig;

        /**
         * Encodes the specified ResponseRoomConfig message. Does not implicitly {@link game_event.ResponseRoomConfig.verify|verify} messages.
         * @param message ResponseRoomConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseRoomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseRoomConfig message, length delimited. Does not implicitly {@link game_event.ResponseRoomConfig.verify|verify} messages.
         * @param message ResponseRoomConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseRoomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseRoomConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseRoomConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseRoomConfig;

        /**
         * Decodes a ResponseRoomConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseRoomConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseRoomConfig;

        /**
         * Verifies a ResponseRoomConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseRoomConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseRoomConfig
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseRoomConfig;

        /**
         * Creates a plain object from a ResponseRoomConfig message. Also converts values to other types if specified.
         * @param message ResponseRoomConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseRoomConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseRoomConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseUserJoined. */
    interface IResponseUserJoined {

        /** ResponseUserJoined userId */
        userId?: (number|Long|null);

        /** ResponseUserJoined name */
        name?: (string|null);

        /** ResponseUserJoined chip */
        chip?: (number|Long|null);

        /** ResponseUserJoined avatar */
        avatar?: (number|null);

        /** ResponseUserJoined seat */
        seat?: (number|null);

        /** ResponseUserJoined roomId */
        roomId?: (number|null);
    }

    /** Represents a ResponseUserJoined. */
    class ResponseUserJoined implements IResponseUserJoined {

        /**
         * Constructs a new ResponseUserJoined.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseUserJoined);

        /** ResponseUserJoined userId. */
        public userId: (number|Long);

        /** ResponseUserJoined name. */
        public name: string;

        /** ResponseUserJoined chip. */
        public chip: (number|Long);

        /** ResponseUserJoined avatar. */
        public avatar: number;

        /** ResponseUserJoined seat. */
        public seat: number;

        /** ResponseUserJoined roomId. */
        public roomId: number;

        /**
         * Creates a new ResponseUserJoined instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseUserJoined instance
         */
        public static create(properties?: game_event.IResponseUserJoined): game_event.ResponseUserJoined;

        /**
         * Encodes the specified ResponseUserJoined message. Does not implicitly {@link game_event.ResponseUserJoined.verify|verify} messages.
         * @param message ResponseUserJoined message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseUserJoined, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseUserJoined message, length delimited. Does not implicitly {@link game_event.ResponseUserJoined.verify|verify} messages.
         * @param message ResponseUserJoined message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseUserJoined, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseUserJoined message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseUserJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseUserJoined;

        /**
         * Decodes a ResponseUserJoined message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseUserJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseUserJoined;

        /**
         * Verifies a ResponseUserJoined message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseUserJoined message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseUserJoined
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseUserJoined;

        /**
         * Creates a plain object from a ResponseUserJoined message. Also converts values to other types if specified.
         * @param message ResponseUserJoined
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseUserJoined, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseUserJoined to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseUserLeft. */
    interface IResponseUserLeft {

        /** ResponseUserLeft userId */
        userId?: (number|Long|null);

        /** ResponseUserLeft disconnect */
        disconnect?: (boolean|null);

        /** ResponseUserLeft roomId */
        roomId?: (number|null);
    }

    /** Represents a ResponseUserLeft. */
    class ResponseUserLeft implements IResponseUserLeft {

        /**
         * Constructs a new ResponseUserLeft.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseUserLeft);

        /** ResponseUserLeft userId. */
        public userId: (number|Long);

        /** ResponseUserLeft disconnect. */
        public disconnect: boolean;

        /** ResponseUserLeft roomId. */
        public roomId: number;

        /**
         * Creates a new ResponseUserLeft instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseUserLeft instance
         */
        public static create(properties?: game_event.IResponseUserLeft): game_event.ResponseUserLeft;

        /**
         * Encodes the specified ResponseUserLeft message. Does not implicitly {@link game_event.ResponseUserLeft.verify|verify} messages.
         * @param message ResponseUserLeft message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseUserLeft, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseUserLeft message, length delimited. Does not implicitly {@link game_event.ResponseUserLeft.verify|verify} messages.
         * @param message ResponseUserLeft message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseUserLeft, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseUserLeft message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseUserLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseUserLeft;

        /**
         * Decodes a ResponseUserLeft message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseUserLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseUserLeft;

        /**
         * Verifies a ResponseUserLeft message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseUserLeft message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseUserLeft
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseUserLeft;

        /**
         * Creates a plain object from a ResponseUserLeft message. Also converts values to other types if specified.
         * @param message ResponseUserLeft
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseUserLeft, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseUserLeft to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestAutoLeave. */
    interface IRequestAutoLeave {

        /** RequestAutoLeave roomId */
        roomId?: (number|null);
    }

    /** Represents a RequestAutoLeave. */
    class RequestAutoLeave implements IRequestAutoLeave {

        /**
         * Constructs a new RequestAutoLeave.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IRequestAutoLeave);

        /** RequestAutoLeave roomId. */
        public roomId: number;

        /**
         * Creates a new RequestAutoLeave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAutoLeave instance
         */
        public static create(properties?: game_event.IRequestAutoLeave): game_event.RequestAutoLeave;

        /**
         * Encodes the specified RequestAutoLeave message. Does not implicitly {@link game_event.RequestAutoLeave.verify|verify} messages.
         * @param message RequestAutoLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IRequestAutoLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAutoLeave message, length delimited. Does not implicitly {@link game_event.RequestAutoLeave.verify|verify} messages.
         * @param message RequestAutoLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IRequestAutoLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAutoLeave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAutoLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.RequestAutoLeave;

        /**
         * Decodes a RequestAutoLeave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAutoLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.RequestAutoLeave;

        /**
         * Verifies a RequestAutoLeave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAutoLeave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAutoLeave
         */
        public static fromObject(object: { [k: string]: any }): game_event.RequestAutoLeave;

        /**
         * Creates a plain object from a RequestAutoLeave message. Also converts values to other types if specified.
         * @param message RequestAutoLeave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.RequestAutoLeave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAutoLeave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseAutoLeave. */
    interface IResponseAutoLeave {

        /** ResponseAutoLeave userId */
        userId?: (number|Long|null);

        /** ResponseAutoLeave autoExit */
        autoExit?: (boolean|null);

        /** ResponseAutoLeave roomId */
        roomId?: (number|null);
    }

    /** Represents a ResponseAutoLeave. */
    class ResponseAutoLeave implements IResponseAutoLeave {

        /**
         * Constructs a new ResponseAutoLeave.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_event.IResponseAutoLeave);

        /** ResponseAutoLeave userId. */
        public userId: (number|Long);

        /** ResponseAutoLeave autoExit. */
        public autoExit: boolean;

        /** ResponseAutoLeave roomId. */
        public roomId: number;

        /**
         * Creates a new ResponseAutoLeave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseAutoLeave instance
         */
        public static create(properties?: game_event.IResponseAutoLeave): game_event.ResponseAutoLeave;

        /**
         * Encodes the specified ResponseAutoLeave message. Does not implicitly {@link game_event.ResponseAutoLeave.verify|verify} messages.
         * @param message ResponseAutoLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_event.IResponseAutoLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseAutoLeave message, length delimited. Does not implicitly {@link game_event.ResponseAutoLeave.verify|verify} messages.
         * @param message ResponseAutoLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_event.IResponseAutoLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseAutoLeave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseAutoLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_event.ResponseAutoLeave;

        /**
         * Decodes a ResponseAutoLeave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseAutoLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_event.ResponseAutoLeave;

        /**
         * Verifies a ResponseAutoLeave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseAutoLeave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseAutoLeave
         */
        public static fromObject(object: { [k: string]: any }): game_event.ResponseAutoLeave;

        /**
         * Creates a plain object from a ResponseAutoLeave message. Also converts values to other types if specified.
         * @param message ResponseAutoLeave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_event.ResponseAutoLeave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseAutoLeave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
 
} 
 export {}