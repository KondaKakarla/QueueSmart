declare module "@servicenow/glide/x_snc_queuesmart" {
  export class QueueSmartCallNext {
    execute(): {
      success: boolean;
      message: string;
      queue_record: any;
    };
  }
}