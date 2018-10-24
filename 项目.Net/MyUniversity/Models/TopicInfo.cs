using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyUniversity.Models
{
    public class TopicInfo
    {
        public string TopicId { get; set; }
        public string TopicTitile { get; set; }
        public string TopicContent { get; set; }
        public string TopicTime { get; set; }
        public string UserId { get; set; }
    }
}