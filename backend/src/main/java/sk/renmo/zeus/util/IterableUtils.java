package sk.renmo.zeus.util;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

public class IterableUtils {

    public static <T> Set<T> toSet(Iterable<T> iterable) {
        Set<T> set = new HashSet<>();
        iterable.forEach(set::add);
        return set;
    }

    public static <T> Stream<T> toStream(Iterable<T> iterable) {
        return StreamSupport.stream(iterable.spliterator(), false);
    }

}
