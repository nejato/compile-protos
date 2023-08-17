// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace domino_event. */
export namespace domino_event {

    /** State enum. */
    enum State {
        Pending = 0,
        Countdown = 1,
        DealTime = 2,
        ShowdownTime = 3,
        PlayerTurn = 4,
        PrePlayerTurn = 5
    }

    /** EndType enum. */
    enum EndType {
        None = 0,
        NormalEnd = 1,
        DeadEnd = 2
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response roomState */
        roomState?: (domino_event.IResponseRoomState|null);

        /** Response deal */
        deal?: (domino_event.IResponseDeal|null);

        /** Response finish */
        finish?: (domino_event.IResponseFinishGame|null);

        /** Response error */
        error?: (domino_event.IResponseError|null);

        /** Response countdown */
        countdown?: (domino_event.IResponseCountdown|null);

        /** Response playerTurn */
        playerTurn?: (domino_event.IResponsePlayerTurn|null);

        /** Response playerPlay */
        playerPlay?: (domino_event.IResponsePlayerPlay|null);

        /** Response startCheat */
        startCheat?: (domino_event.IResponseStartCheat|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponse);

        /** Response roomState. */
        public roomState?: (domino_event.IResponseRoomState|null);

        /** Response deal. */
        public deal?: (domino_event.IResponseDeal|null);

        /** Response finish. */
        public finish?: (domino_event.IResponseFinishGame|null);

        /** Response error. */
        public error?: (domino_event.IResponseError|null);

        /** Response countdown. */
        public countdown?: (domino_event.IResponseCountdown|null);

        /** Response playerTurn. */
        public playerTurn?: (domino_event.IResponsePlayerTurn|null);

        /** Response playerPlay. */
        public playerPlay?: (domino_event.IResponsePlayerPlay|null);

        /** Response startCheat. */
        public startCheat?: (domino_event.IResponseStartCheat|null);

        /** Response message. */
        public message?: ("roomState"|"deal"|"finish"|"error"|"countdown"|"playerTurn"|"playerPlay"|"startCheat");

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: domino_event.IResponse): domino_event.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link domino_event.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link domino_event.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.Response;

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
        public static fromObject(object: { [k: string]: any }): domino_event.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request play */
        play?: (domino_event.IRequestPlay|null);

        /** Request cheat */
        cheat?: (domino_event.IRequestCheat|null);

        /** Request startCheat */
        startCheat?: (domino_event.IRequestStartCheat|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IRequest);

        /** Request play. */
        public play?: (domino_event.IRequestPlay|null);

        /** Request cheat. */
        public cheat?: (domino_event.IRequestCheat|null);

        /** Request startCheat. */
        public startCheat?: (domino_event.IRequestStartCheat|null);

        /** Request message. */
        public message?: ("play"|"cheat"|"startCheat");

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: domino_event.IRequest): domino_event.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link domino_event.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link domino_event.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.Request;

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
        public static fromObject(object: { [k: string]: any }): domino_event.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseError. */
    interface IResponseError {

        /** ResponseError code */
        code?: (number|null);

        /** ResponseError tag */
        tag?: (number|null);
    }

    /** Represents a ResponseError. */
    class ResponseError implements IResponseError {

        /**
         * Constructs a new ResponseError.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponseError);

        /** ResponseError code. */
        public code: number;

        /** ResponseError tag. */
        public tag: number;

        /**
         * Creates a new ResponseError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseError instance
         */
        public static create(properties?: domino_event.IResponseError): domino_event.ResponseError;

        /**
         * Encodes the specified ResponseError message. Does not implicitly {@link domino_event.ResponseError.verify|verify} messages.
         * @param message ResponseError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponseError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseError message, length delimited. Does not implicitly {@link domino_event.ResponseError.verify|verify} messages.
         * @param message ResponseError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponseError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponseError;

        /**
         * Decodes a ResponseError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponseError;

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
        public static fromObject(object: { [k: string]: any }): domino_event.ResponseError;

        /**
         * Creates a plain object from a ResponseError message. Also converts values to other types if specified.
         * @param message ResponseError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponseError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player userId */
        userId?: (number|null);

        /** Player name */
        name?: (string|null);

        /** Player chip */
        chip?: (number|Long|null);

        /** Player avatar */
        avatar?: (number|null);

        /** Player seat */
        seat?: (number|null);

        /** Player disconnected */
        disconnected?: (boolean|null);

        /** Player state */
        state?: (number|null);

        /** Player numberOfCards */
        numberOfCards?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IPlayer);

        /** Player userId. */
        public userId: number;

        /** Player name. */
        public name: string;

        /** Player chip. */
        public chip: (number|Long);

        /** Player avatar. */
        public avatar: number;

        /** Player seat. */
        public seat: number;

        /** Player disconnected. */
        public disconnected: boolean;

        /** Player state. */
        public state: number;

        /** Player numberOfCards. */
        public numberOfCards: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: domino_event.IPlayer): domino_event.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link domino_event.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link domino_event.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): domino_event.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseRoomState. */
    interface IResponseRoomState {

        /** ResponseRoomState state */
        state?: (domino_event.State|null);

        /** ResponseRoomState countDownMillis */
        countDownMillis?: (number|null);

        /** ResponseRoomState stateStartTime */
        stateStartTime?: (number|null);

        /** ResponseRoomState bet */
        bet?: (number|Long|null);

        /** ResponseRoomState players */
        players?: (domino_event.IPlayer[]|null);

        /** ResponseRoomState isRegisteredLeave */
        isRegisteredLeave?: (boolean|null);

        /** ResponseRoomState cards */
        cards?: (number[]|null);

        /** ResponseRoomState tableCards */
        tableCards?: (number[]|null);

        /** ResponseRoomState currentPlayerId */
        currentPlayerId?: (number|null);

        /** ResponseRoomState lastWinnerId */
        lastWinnerId?: (number|null);

        /** ResponseRoomState lastCard */
        lastCard?: (number|null);
    }

    /** Represents a ResponseRoomState. */
    class ResponseRoomState implements IResponseRoomState {

        /**
         * Constructs a new ResponseRoomState.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponseRoomState);

        /** ResponseRoomState state. */
        public state: domino_event.State;

        /** ResponseRoomState countDownMillis. */
        public countDownMillis: number;

        /** ResponseRoomState stateStartTime. */
        public stateStartTime: number;

        /** ResponseRoomState bet. */
        public bet: (number|Long);

        /** ResponseRoomState players. */
        public players: domino_event.IPlayer[];

        /** ResponseRoomState isRegisteredLeave. */
        public isRegisteredLeave: boolean;

        /** ResponseRoomState cards. */
        public cards: number[];

        /** ResponseRoomState tableCards. */
        public tableCards: number[];

        /** ResponseRoomState currentPlayerId. */
        public currentPlayerId: number;

        /** ResponseRoomState lastWinnerId. */
        public lastWinnerId: number;

        /** ResponseRoomState lastCard. */
        public lastCard: number;

        /**
         * Creates a new ResponseRoomState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseRoomState instance
         */
        public static create(properties?: domino_event.IResponseRoomState): domino_event.ResponseRoomState;

        /**
         * Encodes the specified ResponseRoomState message. Does not implicitly {@link domino_event.ResponseRoomState.verify|verify} messages.
         * @param message ResponseRoomState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponseRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseRoomState message, length delimited. Does not implicitly {@link domino_event.ResponseRoomState.verify|verify} messages.
         * @param message ResponseRoomState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponseRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseRoomState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponseRoomState;

        /**
         * Decodes a ResponseRoomState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponseRoomState;

        /**
         * Verifies a ResponseRoomState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseRoomState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseRoomState
         */
        public static fromObject(object: { [k: string]: any }): domino_event.ResponseRoomState;

        /**
         * Creates a plain object from a ResponseRoomState message. Also converts values to other types if specified.
         * @param message ResponseRoomState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponseRoomState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseRoomState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCountdown. */
    interface IResponseCountdown {

        /** ResponseCountdown seconds */
        seconds?: (number|null);
    }

    /** Represents a ResponseCountdown. */
    class ResponseCountdown implements IResponseCountdown {

        /**
         * Constructs a new ResponseCountdown.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponseCountdown);

        /** ResponseCountdown seconds. */
        public seconds: number;

        /**
         * Creates a new ResponseCountdown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCountdown instance
         */
        public static create(properties?: domino_event.IResponseCountdown): domino_event.ResponseCountdown;

        /**
         * Encodes the specified ResponseCountdown message. Does not implicitly {@link domino_event.ResponseCountdown.verify|verify} messages.
         * @param message ResponseCountdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponseCountdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCountdown message, length delimited. Does not implicitly {@link domino_event.ResponseCountdown.verify|verify} messages.
         * @param message ResponseCountdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponseCountdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCountdown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponseCountdown;

        /**
         * Decodes a ResponseCountdown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponseCountdown;

        /**
         * Verifies a ResponseCountdown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCountdown message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCountdown
         */
        public static fromObject(object: { [k: string]: any }): domino_event.ResponseCountdown;

        /**
         * Creates a plain object from a ResponseCountdown message. Also converts values to other types if specified.
         * @param message ResponseCountdown
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponseCountdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCountdown to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseDeal. */
    interface IResponseDeal {

        /** ResponseDeal cards */
        cards?: (number[]|null);
    }

    /** Represents a ResponseDeal. */
    class ResponseDeal implements IResponseDeal {

        /**
         * Constructs a new ResponseDeal.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponseDeal);

        /** ResponseDeal cards. */
        public cards: number[];

        /**
         * Creates a new ResponseDeal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseDeal instance
         */
        public static create(properties?: domino_event.IResponseDeal): domino_event.ResponseDeal;

        /**
         * Encodes the specified ResponseDeal message. Does not implicitly {@link domino_event.ResponseDeal.verify|verify} messages.
         * @param message ResponseDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponseDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseDeal message, length delimited. Does not implicitly {@link domino_event.ResponseDeal.verify|verify} messages.
         * @param message ResponseDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponseDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseDeal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponseDeal;

        /**
         * Decodes a ResponseDeal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponseDeal;

        /**
         * Verifies a ResponseDeal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseDeal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseDeal
         */
        public static fromObject(object: { [k: string]: any }): domino_event.ResponseDeal;

        /**
         * Creates a plain object from a ResponseDeal message. Also converts values to other types if specified.
         * @param message ResponseDeal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponseDeal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseDeal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateChip. */
    interface IUpdateChip {

        /** UpdateChip userId */
        userId?: (number|null);

        /** UpdateChip amount */
        amount?: (number|Long|null);

        /** UpdateChip userMoney */
        userMoney?: (number|Long|null);
    }

    /** Represents an UpdateChip. */
    class UpdateChip implements IUpdateChip {

        /**
         * Constructs a new UpdateChip.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IUpdateChip);

        /** UpdateChip userId. */
        public userId: number;

        /** UpdateChip amount. */
        public amount: (number|Long);

        /** UpdateChip userMoney. */
        public userMoney: (number|Long);

        /**
         * Creates a new UpdateChip instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateChip instance
         */
        public static create(properties?: domino_event.IUpdateChip): domino_event.UpdateChip;

        /**
         * Encodes the specified UpdateChip message. Does not implicitly {@link domino_event.UpdateChip.verify|verify} messages.
         * @param message UpdateChip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IUpdateChip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateChip message, length delimited. Does not implicitly {@link domino_event.UpdateChip.verify|verify} messages.
         * @param message UpdateChip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IUpdateChip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateChip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.UpdateChip;

        /**
         * Decodes an UpdateChip message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.UpdateChip;

        /**
         * Verifies an UpdateChip message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateChip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateChip
         */
        public static fromObject(object: { [k: string]: any }): domino_event.UpdateChip;

        /**
         * Creates a plain object from an UpdateChip message. Also converts values to other types if specified.
         * @param message UpdateChip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.UpdateChip, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateChip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponsePlayerTurn. */
    interface IResponsePlayerTurn {

        /** ResponsePlayerTurn seconds */
        seconds?: (number|null);

        /** ResponsePlayerTurn userId */
        userId?: (number|null);

        /** ResponsePlayerTurn updateChip */
        updateChip?: (domino_event.IUpdateChip[]|null);

        /** ResponsePlayerTurn isFinish */
        isFinish?: (boolean|null);
    }

    /** Represents a ResponsePlayerTurn. */
    class ResponsePlayerTurn implements IResponsePlayerTurn {

        /**
         * Constructs a new ResponsePlayerTurn.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponsePlayerTurn);

        /** ResponsePlayerTurn seconds. */
        public seconds: number;

        /** ResponsePlayerTurn userId. */
        public userId: number;

        /** ResponsePlayerTurn updateChip. */
        public updateChip: domino_event.IUpdateChip[];

        /** ResponsePlayerTurn isFinish. */
        public isFinish: boolean;

        /**
         * Creates a new ResponsePlayerTurn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponsePlayerTurn instance
         */
        public static create(properties?: domino_event.IResponsePlayerTurn): domino_event.ResponsePlayerTurn;

        /**
         * Encodes the specified ResponsePlayerTurn message. Does not implicitly {@link domino_event.ResponsePlayerTurn.verify|verify} messages.
         * @param message ResponsePlayerTurn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponsePlayerTurn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponsePlayerTurn message, length delimited. Does not implicitly {@link domino_event.ResponsePlayerTurn.verify|verify} messages.
         * @param message ResponsePlayerTurn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponsePlayerTurn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponsePlayerTurn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponsePlayerTurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponsePlayerTurn;

        /**
         * Decodes a ResponsePlayerTurn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponsePlayerTurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponsePlayerTurn;

        /**
         * Verifies a ResponsePlayerTurn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponsePlayerTurn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponsePlayerTurn
         */
        public static fromObject(object: { [k: string]: any }): domino_event.ResponsePlayerTurn;

        /**
         * Creates a plain object from a ResponsePlayerTurn message. Also converts values to other types if specified.
         * @param message ResponsePlayerTurn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponsePlayerTurn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponsePlayerTurn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPlay. */
    interface IRequestPlay {

        /** RequestPlay card */
        card?: (number|null);

        /** RequestPlay head */
        head?: (boolean|null);
    }

    /** Represents a RequestPlay. */
    class RequestPlay implements IRequestPlay {

        /**
         * Constructs a new RequestPlay.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IRequestPlay);

        /** RequestPlay card. */
        public card: number;

        /** RequestPlay head. */
        public head: boolean;

        /**
         * Creates a new RequestPlay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPlay instance
         */
        public static create(properties?: domino_event.IRequestPlay): domino_event.RequestPlay;

        /**
         * Encodes the specified RequestPlay message. Does not implicitly {@link domino_event.RequestPlay.verify|verify} messages.
         * @param message RequestPlay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IRequestPlay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPlay message, length delimited. Does not implicitly {@link domino_event.RequestPlay.verify|verify} messages.
         * @param message RequestPlay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IRequestPlay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPlay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.RequestPlay;

        /**
         * Decodes a RequestPlay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.RequestPlay;

        /**
         * Verifies a RequestPlay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPlay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPlay
         */
        public static fromObject(object: { [k: string]: any }): domino_event.RequestPlay;

        /**
         * Creates a plain object from a RequestPlay message. Also converts values to other types if specified.
         * @param message RequestPlay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.RequestPlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPlay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponsePlayerPlay. */
    interface IResponsePlayerPlay {

        /** ResponsePlayerPlay userId */
        userId?: (number|null);

        /** ResponsePlayerPlay card */
        card?: (number|null);

        /** ResponsePlayerPlay head */
        head?: (boolean|null);

        /** ResponsePlayerPlay numberOfCards */
        numberOfCards?: (number|null);
    }

    /** Represents a ResponsePlayerPlay. */
    class ResponsePlayerPlay implements IResponsePlayerPlay {

        /**
         * Constructs a new ResponsePlayerPlay.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponsePlayerPlay);

        /** ResponsePlayerPlay userId. */
        public userId: number;

        /** ResponsePlayerPlay card. */
        public card: number;

        /** ResponsePlayerPlay head. */
        public head: boolean;

        /** ResponsePlayerPlay numberOfCards. */
        public numberOfCards: number;

        /**
         * Creates a new ResponsePlayerPlay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponsePlayerPlay instance
         */
        public static create(properties?: domino_event.IResponsePlayerPlay): domino_event.ResponsePlayerPlay;

        /**
         * Encodes the specified ResponsePlayerPlay message. Does not implicitly {@link domino_event.ResponsePlayerPlay.verify|verify} messages.
         * @param message ResponsePlayerPlay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponsePlayerPlay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponsePlayerPlay message, length delimited. Does not implicitly {@link domino_event.ResponsePlayerPlay.verify|verify} messages.
         * @param message ResponsePlayerPlay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponsePlayerPlay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponsePlayerPlay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponsePlayerPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponsePlayerPlay;

        /**
         * Decodes a ResponsePlayerPlay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponsePlayerPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponsePlayerPlay;

        /**
         * Verifies a ResponsePlayerPlay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponsePlayerPlay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponsePlayerPlay
         */
        public static fromObject(object: { [k: string]: any }): domino_event.ResponsePlayerPlay;

        /**
         * Creates a plain object from a ResponsePlayerPlay message. Also converts values to other types if specified.
         * @param message ResponsePlayerPlay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponsePlayerPlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponsePlayerPlay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerFinishResult. */
    interface IPlayerFinishResult {

        /** PlayerFinishResult userId */
        userId?: (number|null);

        /** PlayerFinishResult amount */
        amount?: (number|Long|null);

        /** PlayerFinishResult userMoney */
        userMoney?: (number|Long|null);

        /** PlayerFinishResult cards */
        cards?: (number[]|null);
    }

    /** Represents a PlayerFinishResult. */
    class PlayerFinishResult implements IPlayerFinishResult {

        /**
         * Constructs a new PlayerFinishResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IPlayerFinishResult);

        /** PlayerFinishResult userId. */
        public userId: number;

        /** PlayerFinishResult amount. */
        public amount: (number|Long);

        /** PlayerFinishResult userMoney. */
        public userMoney: (number|Long);

        /** PlayerFinishResult cards. */
        public cards: number[];

        /**
         * Creates a new PlayerFinishResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerFinishResult instance
         */
        public static create(properties?: domino_event.IPlayerFinishResult): domino_event.PlayerFinishResult;

        /**
         * Encodes the specified PlayerFinishResult message. Does not implicitly {@link domino_event.PlayerFinishResult.verify|verify} messages.
         * @param message PlayerFinishResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IPlayerFinishResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerFinishResult message, length delimited. Does not implicitly {@link domino_event.PlayerFinishResult.verify|verify} messages.
         * @param message PlayerFinishResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IPlayerFinishResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerFinishResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerFinishResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.PlayerFinishResult;

        /**
         * Decodes a PlayerFinishResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerFinishResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.PlayerFinishResult;

        /**
         * Verifies a PlayerFinishResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerFinishResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerFinishResult
         */
        public static fromObject(object: { [k: string]: any }): domino_event.PlayerFinishResult;

        /**
         * Creates a plain object from a PlayerFinishResult message. Also converts values to other types if specified.
         * @param message PlayerFinishResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.PlayerFinishResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerFinishResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseFinishGame. */
    interface IResponseFinishGame {

        /** ResponseFinishGame winnerId */
        winnerId?: (number|null);

        /** ResponseFinishGame multiplier */
        multiplier?: (number|null);

        /** ResponseFinishGame result */
        result?: (domino_event.IPlayerFinishResult[]|null);

        /** ResponseFinishGame endType */
        endType?: (domino_event.EndType|null);
    }

    /** Represents a ResponseFinishGame. */
    class ResponseFinishGame implements IResponseFinishGame {

        /**
         * Constructs a new ResponseFinishGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponseFinishGame);

        /** ResponseFinishGame winnerId. */
        public winnerId: number;

        /** ResponseFinishGame multiplier. */
        public multiplier: number;

        /** ResponseFinishGame result. */
        public result: domino_event.IPlayerFinishResult[];

        /** ResponseFinishGame endType. */
        public endType: domino_event.EndType;

        /**
         * Creates a new ResponseFinishGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseFinishGame instance
         */
        public static create(properties?: domino_event.IResponseFinishGame): domino_event.ResponseFinishGame;

        /**
         * Encodes the specified ResponseFinishGame message. Does not implicitly {@link domino_event.ResponseFinishGame.verify|verify} messages.
         * @param message ResponseFinishGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponseFinishGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseFinishGame message, length delimited. Does not implicitly {@link domino_event.ResponseFinishGame.verify|verify} messages.
         * @param message ResponseFinishGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponseFinishGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseFinishGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseFinishGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponseFinishGame;

        /**
         * Decodes a ResponseFinishGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseFinishGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponseFinishGame;

        /**
         * Verifies a ResponseFinishGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseFinishGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseFinishGame
         */
        public static fromObject(object: { [k: string]: any }): domino_event.ResponseFinishGame;

        /**
         * Creates a plain object from a ResponseFinishGame message. Also converts values to other types if specified.
         * @param message ResponseFinishGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponseFinishGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseFinishGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestStartCheat. */
    interface IRequestStartCheat {
    }

    /** Represents a RequestStartCheat. */
    class RequestStartCheat implements IRequestStartCheat {

        /**
         * Constructs a new RequestStartCheat.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IRequestStartCheat);

        /**
         * Creates a new RequestStartCheat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStartCheat instance
         */
        public static create(properties?: domino_event.IRequestStartCheat): domino_event.RequestStartCheat;

        /**
         * Encodes the specified RequestStartCheat message. Does not implicitly {@link domino_event.RequestStartCheat.verify|verify} messages.
         * @param message RequestStartCheat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IRequestStartCheat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStartCheat message, length delimited. Does not implicitly {@link domino_event.RequestStartCheat.verify|verify} messages.
         * @param message RequestStartCheat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IRequestStartCheat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStartCheat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestStartCheat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.RequestStartCheat;

        /**
         * Decodes a RequestStartCheat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStartCheat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.RequestStartCheat;

        /**
         * Verifies a RequestStartCheat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStartCheat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestStartCheat
         */
        public static fromObject(object: { [k: string]: any }): domino_event.RequestStartCheat;

        /**
         * Creates a plain object from a RequestStartCheat message. Also converts values to other types if specified.
         * @param message RequestStartCheat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.RequestStartCheat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStartCheat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseStartCheat. */
    interface IResponseStartCheat {
    }

    /** Represents a ResponseStartCheat. */
    class ResponseStartCheat implements IResponseStartCheat {

        /**
         * Constructs a new ResponseStartCheat.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IResponseStartCheat);

        /**
         * Creates a new ResponseStartCheat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseStartCheat instance
         */
        public static create(properties?: domino_event.IResponseStartCheat): domino_event.ResponseStartCheat;

        /**
         * Encodes the specified ResponseStartCheat message. Does not implicitly {@link domino_event.ResponseStartCheat.verify|verify} messages.
         * @param message ResponseStartCheat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IResponseStartCheat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseStartCheat message, length delimited. Does not implicitly {@link domino_event.ResponseStartCheat.verify|verify} messages.
         * @param message ResponseStartCheat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IResponseStartCheat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseStartCheat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseStartCheat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.ResponseStartCheat;

        /**
         * Decodes a ResponseStartCheat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseStartCheat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.ResponseStartCheat;

        /**
         * Verifies a ResponseStartCheat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseStartCheat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseStartCheat
         */
        public static fromObject(object: { [k: string]: any }): domino_event.ResponseStartCheat;

        /**
         * Creates a plain object from a ResponseStartCheat message. Also converts values to other types if specified.
         * @param message ResponseStartCheat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.ResponseStartCheat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseStartCheat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheatCards. */
    interface ICheatCards {

        /** CheatCards seat */
        seat?: (number|null);

        /** CheatCards cards */
        cards?: (number[]|null);
    }

    /** Represents a CheatCards. */
    class CheatCards implements ICheatCards {

        /**
         * Constructs a new CheatCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.ICheatCards);

        /** CheatCards seat. */
        public seat: number;

        /** CheatCards cards. */
        public cards: number[];

        /**
         * Creates a new CheatCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheatCards instance
         */
        public static create(properties?: domino_event.ICheatCards): domino_event.CheatCards;

        /**
         * Encodes the specified CheatCards message. Does not implicitly {@link domino_event.CheatCards.verify|verify} messages.
         * @param message CheatCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.ICheatCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheatCards message, length delimited. Does not implicitly {@link domino_event.CheatCards.verify|verify} messages.
         * @param message CheatCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.ICheatCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheatCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheatCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.CheatCards;

        /**
         * Decodes a CheatCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheatCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.CheatCards;

        /**
         * Verifies a CheatCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheatCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheatCards
         */
        public static fromObject(object: { [k: string]: any }): domino_event.CheatCards;

        /**
         * Creates a plain object from a CheatCards message. Also converts values to other types if specified.
         * @param message CheatCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.CheatCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheatCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCheat. */
    interface IRequestCheat {

        /** RequestCheat cheatCards */
        cheatCards?: (domino_event.ICheatCards[]|null);
    }

    /** Represents a RequestCheat. */
    class RequestCheat implements IRequestCheat {

        /**
         * Constructs a new RequestCheat.
         * @param [properties] Properties to set
         */
        constructor(properties?: domino_event.IRequestCheat);

        /** RequestCheat cheatCards. */
        public cheatCards: domino_event.ICheatCards[];

        /**
         * Creates a new RequestCheat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCheat instance
         */
        public static create(properties?: domino_event.IRequestCheat): domino_event.RequestCheat;

        /**
         * Encodes the specified RequestCheat message. Does not implicitly {@link domino_event.RequestCheat.verify|verify} messages.
         * @param message RequestCheat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domino_event.IRequestCheat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCheat message, length delimited. Does not implicitly {@link domino_event.RequestCheat.verify|verify} messages.
         * @param message RequestCheat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domino_event.IRequestCheat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCheat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCheat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_event.RequestCheat;

        /**
         * Decodes a RequestCheat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCheat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_event.RequestCheat;

        /**
         * Verifies a RequestCheat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCheat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCheat
         */
        public static fromObject(object: { [k: string]: any }): domino_event.RequestCheat;

        /**
         * Creates a plain object from a RequestCheat message. Also converts values to other types if specified.
         * @param message RequestCheat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domino_event.RequestCheat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCheat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
